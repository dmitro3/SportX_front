import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MainStackNavigation } from "./src/routes/main-stack";
import { SafeAreaView } from "react-native";
import { SplashScreenContextProvider } from "./src/context/splash-context";
import { AuthContextProvider } from "./src/context/auth-context";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView />
      <AuthContextProvider>
        <SplashScreenContextProvider>
          <MainStackNavigation />
        </SplashScreenContextProvider>
      </AuthContextProvider>
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
    </GestureHandlerRootView>
  );
};

export default App;
