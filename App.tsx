import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MainStackNavigation } from "./src/routes/main-stack";


const App = () => {
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
      <MainStackNavigation />
    </GestureHandlerRootView>
  )
}

export default App;
