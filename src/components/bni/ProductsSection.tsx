import React from 'react';
import { ProfileData } from '../../types/bni';
import { Clock } from 'lucide-react';

interface ProductsSectionProps {
  profile: ProfileData;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ profile }) => {
  const prod = profile.products;
  if (!prod || !prod.items || prod.items.length === 0) return null;

  return (
    <section id="produtos" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {prod.badge || 'MEUS PRODUTOS PRINCIPAIS'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1815] leading-[1.12]">
              <span className="font-sans font-bold">{prod.title || 'Estrutura financeira para crescer'}</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
              {prod.subtitle}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prod.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E7E2DA] hover:border-[#4F6D46] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Speed Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#8D6E63] group-hover:text-[#4F6D46] transition-colors">
                    {item.number}
                  </span>
                  {item.deliveryTime && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EBF1E8] border border-[#D5E2D2] text-[#3E5636] text-[10px] font-mono font-semibold">
                      <Clock className="w-2.5 h-2.5" />
                      {item.deliveryTime}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1C1815] mb-2.5 group-hover:text-[#292524] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight text if any */}
                {item.highlight && (
                  <p className="text-[11px] text-[#8C8275] italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#EFEBE4] mb-4">
                    {item.highlight}
                  </p>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F5EFE6] text-[#5D4037] border border-[#E8DEC8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
