import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MainStackNavigation } from "./src/routes/main-stack";
import { SafeAreaView } from "react-native";
import { SplashScreenContextProvider } from "./src/context/splash-context";
import { AuthContextProvider } from "./src/context/auth-context";
import { BottomSheetProvider } from "./src/context/bottom-sheet-context";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView />
      <AuthContextProvider>
        <SplashScreenContextProvider>
          <BottomSheetProvider>
            <MainStackNavigation />
          </BottomSheetProvider>
        </SplashScreenContextProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
