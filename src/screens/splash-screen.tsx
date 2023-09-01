import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ExpoSplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { navigate } from "../routes/navigation";

// enable expo splash screen
ExpoSplashScreen.preventAutoHideAsync();

// enable expo splash screen
ExpoSplashScreen.preventAutoHideAsync();

export const SplashScreen = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            ExpoSplashScreen.hideAsync();
            navigate("Login");
        }, 5000);

        return clearTimeout(timer);
    }, [])
  return <></>;
};
