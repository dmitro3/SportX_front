import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';
interface BottomSheetContextProps {
  children: ReactNode;
}

interface BottomSheetContextType {
  isOpen: boolean;
  handleBottomSheet: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextType>({
    isOpen: false,
    handleBottomSheet: () => null
});

export const BottomSheetProvider: React.FC<BottomSheetContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBottomSheet = () => setIsOpen(!isOpen);

  return (
    <BottomSheetContext.Provider value={{ isOpen, handleBottomSheet }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () =>  useContext(BottomSheetContext);
