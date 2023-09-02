// ui
import { Image, Text, StyleSheet, View } from "react-native";

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// types
import { TabsParamsList } from "../types";

// components
import Entypo from "react-native-vector-icons/Entypo";

// screens
import { Home, WalletScreen } from "../screens";

const Tabs = createBottomTabNavigator<TabsParamsList>();

export const TabNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo
              id="home"
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Wallet
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
           <View style={styles.icon_container} >
             <Entypo
              id="wallet"
              name="wallet"
              color={color}
              size={size}
            />
           </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  icon_container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});
