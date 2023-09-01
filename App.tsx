import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MainStackNavigation } from "./src/routes/main-stack";
import { SafeAreaView } from "react-native";
import { SplashScreenContextProvider } from "./src/context/splash-context";



const App = () => {
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
      <SafeAreaView />
      <SplashScreenContextProvider>
      <MainStackNavigation />
        </SplashScreenContextProvider>
    </GestureHandlerRootView>
  )
}

export default App;
