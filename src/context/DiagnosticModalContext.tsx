import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DiagnosticModalContextType {
  isOpen: boolean;
  initialSegment: string;
  openModal: (segment?: string) => void;
  closeModal: () => void;
}

const DiagnosticModalContext = createContext<DiagnosticModalContextType | undefined>(undefined);

export const DiagnosticModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSegment, setInitialSegment] = useState('');

  const openModal = (segment?: string) => {
    if (segment) {
      setInitialSegment(segment);
    } else {
      setInitialSegment('');
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <DiagnosticModalContext.Provider value={{ isOpen, initialSegment, openModal, closeModal }}>
      {children}
    </DiagnosticModalContext.Provider>
  );
};

export const useDiagnosticModal = (): DiagnosticModalContextType => {
  const context = useContext(DiagnosticModalContext);
  if (!context) {
    throw new Error('useDiagnosticModal must be used within a DiagnosticModalProvider');
  }
  return context;
};
