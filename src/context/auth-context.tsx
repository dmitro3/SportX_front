// react
import { createContext, useState, FC, ReactNode, memo, SetStateAction, Dispatch, useContext } from "react";
import { User } from "../types";

// context props
interface Props {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

// create context
export const authContext = createContext<Props>({
  user: undefined,
  setUser: () => {},
});

// SplashScreenContextProvider props
interface ContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<ContextProviderProps> = memo(
  ({ children }) => {
    // boolean variables indicating that the loading is complete (default - false)
    const [ user, setUser ] = useState<User | undefined>();

    return (
      <authContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </authContext.Provider>
    );
  }
);


export const useUserContext = () => useContext(authContext);
