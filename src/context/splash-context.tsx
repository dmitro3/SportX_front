// react
import { createContext, useState, FC, ReactNode, memo } from "react";

// context props
interface splashScreenContextProps {
  isLoadComplete: boolean;
  setIsLoadComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

// create context
export const splashScreenContext = createContext<splashScreenContextProps>({
  isLoadComplete: false,
  setIsLoadComplete: () => {},
});

// SplashScreenContextProvider props
interface ContextProviderProps {
  children: ReactNode;
}

export const SplashScreenContextProvider: FC<ContextProviderProps> = memo(
  ({ children }) => {
    // boolean variables indicating that the loading is complete (default - false)
    const [isLoadComplete, setIsLoadComplete] = useState<boolean>(false);

    return (
      <splashScreenContext.Provider
        value={{
          isLoadComplete,
          setIsLoadComplete,
        }}
      >
        {children}
      </splashScreenContext.Provider>
    );
  }
);
