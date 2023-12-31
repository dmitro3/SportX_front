// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./navigation";
import { enableScreens } from "react-native-screens";

// types
import { MainStackParamsList } from "../types";

// components & navigation stacks
import { AccessScreen, Login, SplashScreen } from "../screens";
import { TabNavigation } from "./tab-navigation";



enableScreens();

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const MainStackNavigation = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="AccessScreen" component={AccessScreen} />
        <MainStack.Screen name="Tabs" component={TabNavigation} />
        <MainStack.Screen name="Splash" component={SplashScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
