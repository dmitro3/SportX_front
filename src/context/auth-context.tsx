// react
import {
  Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    memo,
    useContext,
    useEffect,
    useState,
  } from "react";
  

  
  // types
  import { User } from "../types";
  
  // api
  import { getUserData } from "../api/get-user-data";
  
  
  // context props
  interface userAuthContextProps {
    user: any | User | null;
    isAuthGetComplete: boolean;
    isUserAuthenticated: boolean;
    isUserCompleteOnboarding: boolean;
    mainStackSelect: "Login" | "Access" | "Tabs" | undefined;
    setUserCompleteOnboarding: React.Dispatch<React.SetStateAction<boolean>>;
    logOut: () => void;
    setMainStackSelect: Dispatch<SetStateAction<"Login" | "Access" | "Tabs" | undefined>>;
  }
  
  // create context
  //@ts-ignore
  const userAuthContext = createContext<userAuthContextProps>({
    user: null,
    isAuthGetComplete: false,
    isUserAuthenticated: false,
    isUserCompleteOnboarding: false,
    mainStackSelect: undefined,
    setUserCompleteOnboarding: () => {},
  });
  
  // UserAuthContextProvider props
  interface UserAuthContextProvider {
    children: ReactNode;
  }
  
  export const FirebaseUserAuthContextProvider: FC<UserAuthContextProvider> =
    memo(({ children }) => {
  
      // variable to store user
      const [user, setUser] = useState<any | User | null>(null);
  
      // variable to store the state of the authentication check
      const [isAuthGetComplete, setAuthGetComplete] = useState<boolean>(false);
  
      // boolean variables indicating that the user is authenticated
      const isUserAuthenticated = Boolean(user?.email);
  
      // boolean variables indicating that the user complete onboarding (default - false)
      const [isUserCompleteOnboarding, setUserCompleteOnboarding] =
        useState<boolean>(false);
  
      const [mainStackSelect, setMainStackSelect] = useState<
      "Login" | "Access" | "Tabs" | undefined
      >(undefined);
  
      // function to log in with email and password
      function logInWithEmail(email: string, password: string) {
        // TODO: change
        // return signInWithEmailAndPassword(auth, email, password);
      }
  
      // function to register with email and password
      function signUpWithEmail(email: string, password: string) {
        // return createUserWithEmailAndPassword(auth, email, password);
      }
  
  
      // function to log out
      function logOut() {
            // TODO: log out
        // return auth.signOut();
      }

    //   // get the user and save them and also save the status that the request is done (need to know that the user is simply not saved)
    //   useEffect(() => {
    //     onAuthStateChanged(auth, (user: FirebaseUser | null) => {
    //       setAuthGetComplete(false);
    //       setUserCompleteOnboarding(false);
  
    //       const isUserExists = Boolean(user);
    //       const isUserUidExists = Boolean(user?.uid);
  
    //       setUser(user);
  
    //       if (isUserExists && isUserUidExists) {
    //         const userUid = user?.uid;
  
    //         getUserData(userUid!).then(
    //           (userInfo: DocumentData | User | undefined) => {
    //             if (!Boolean(userInfo)) {
    //               logOut();
    //               return;
    //             }
  
    //             const isFinishOnboardingExists = Boolean(
    //               userInfo?.isFinishOnboarding
    //             );
  
    //             setUserCompleteOnboarding(isFinishOnboardingExists);
    //             setAuthGetComplete(true);
    //           }
    //         );
    //       } else {
    //         setAuthGetComplete(true);
    //       }
    //     });
    //   }, []);
  
      // function to update local user information
      // async function updateUserLocalInfo() {
      //   const _userInfo = await getUserData(user.uid);
  
      //   setUser(_userInfo);
      // }
  
      return (
        <userAuthContext.Provider
          value={{
            user,
            logOut,
            isUserAuthenticated,
            isAuthGetComplete,
            isUserCompleteOnboarding,
            setUserCompleteOnboarding,
            mainStackSelect,
            setMainStackSelect
          }}
        >
          {children}
        </userAuthContext.Provider>
      );
    });
  
  export function useUserAuth() {
    return useContext(userAuthContext);
  }
