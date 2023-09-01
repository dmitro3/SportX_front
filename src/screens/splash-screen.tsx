import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ExpoSplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { navigate } from "../routes/navigation";


// enable expo splash screen
// ExpoSplashScreen.preventAutoHideAsync();

export const SplashScreen = () => {
    console.log("Hello World from SplashScreen");
    navigate("Login");
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // ExpoSplashScreen.hideAsync();
    //         navigate("Login");
    //     }, 500);
        
    //     return clearTimeout(timer);
    // }, [])
  return <></>;
};
