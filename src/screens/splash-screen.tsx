// splash
import * as ExpoSplashScreen from "expo-splash-screen";

// hooks
import { useState, useEffect, useCallback, useContext } from "react";
import { useFonts } from 'expo-font';

// context
import { splashScreenContext } from "../context/splash-context";
import { useUserAuth } from "../context/auth-context";


// enable expo splash screen
// ExpoSplashScreen.preventAutoHideAsync();

import * as Font from 'expo-font';
import { navigate } from "../routes/navigation";

const loadFonts = async () => {
  await Font.loadAsync({
    'SourceCode': require('../assets/fonts/source-code-pro.ttf'),
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
