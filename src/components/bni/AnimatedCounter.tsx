import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const startValue = 0;
          const endValue = Number(value) || 0;

          if (endValue === 0) {
            setDisplayValue(0);
            return;
          }

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (endValue - startValue) * easeOut;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  const formatted = decimals > 0
    ? displayValue.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : Math.round(displayValue).toLocaleString('pt-BR');

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
};

interface AnimatedCurrencyProps {
  formattedString: string;
  duration?: number;
  className?: string;
}

export const AnimatedCurrency: React.FC<AnimatedCurrencyProps> = ({
  formattedString,
  duration = 1000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  const parseCurrency = (str: string) => {
    if (!str) return { target: 0, decimals: 0, prefix: 'R$ ', suffix: '' };

    const trimmed = str.trim();
    const prefix = trimmed.startsWith('R$') ? 'R$ ' : (trimmed.startsWith('$') ? '$ ' : '');
    let body = trimmed.replace(/^(R\$|\$)\s*/, '');
    let suffix = '';

    const unitMatch = body.match(/([a-zA-Z+]+)$/);
    if (unitMatch) {
      suffix = unitMatch[1];
      body = body.replace(/([a-zA-Z+]+)$/, '').trim();
    }

    if (body.includes(',')) {
      const parts = body.split(',');
      const integerPart = parts[0].replace(/\./g, '');
      const decimalPart = parts[1] || '';
      const target = parseFloat(`${integerPart}.${decimalPart}`) || 0;
      const decimals = decimalPart.length;
      return { target, decimals, prefix, suffix };
    }

    const cleanNum = body.replace(/[,.]/g, '');
    const target = parseFloat(cleanNum) || 0;
    return { target, decimals: 0, prefix, suffix };
  };

  const { target, decimals, prefix, suffix } = parseCurrency(formattedString);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const startValue = 0;
          const endValue = target;

          if (endValue === 0) {
            setDisplayValue(0);
            return;
          }

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (endValue - startValue) * easeOut;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const formattedNum = decimals > 0
    ? displayValue.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : Math.round(displayValue).toLocaleString('pt-BR');

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedNum}{suffix}
    </span>
  );
};
