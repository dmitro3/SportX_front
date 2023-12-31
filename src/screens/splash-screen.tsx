// splash
import * as ExpoSplashScreen from "expo-splash-screen";

// hooks
import { useState, useEffect, useCallback, useContext } from "react";
import { useFonts } from 'expo-font';

// context
import { splashScreenContext } from "../context/splash-context";


// enable expo splash screen
// ExpoSplashScreen.preventAutoHideAsync();

import * as Font from 'expo-font';
import { navigate } from "../routes/navigation";

const loadFonts = async () => {
  await Font.loadAsync({
    "Rubik": require("../assets/fonts/rubik.ttf"),
    'SourceCode': require('../assets/fonts/source-code-pro.ttf'),
    'Oswald': require("../assets/fonts/oswald.ttf")
  });
};

export const SplashScreen = () => {
  useEffect(() => {
    const loadAssets = async () => {
      await loadFonts();
      navigate('Login');
    };
    loadAssets();
  }, []);
  return <></>;
};
