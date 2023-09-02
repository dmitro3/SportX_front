// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// types
import { WalletParamsList } from "../types";

// components & navigation stacks
import  { Profile, WalletScreen } from "../screens";


const WalletStack = createNativeStackNavigator<WalletParamsList>();

export const WalletStackNavigation = () => {
  return (
      <WalletStack.Navigator
        initialRouteName="Wallet"
        screenOptions={{
          headerShown: false,
        }}
      >
        <WalletStack.Screen name="Wallet" component={WalletScreen} />
        <WalletStack.Screen name="Profile" component={Profile} />
      </WalletStack.Navigator>
  );
};
