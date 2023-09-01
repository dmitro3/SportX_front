// ui
import { Image, Text, StyleSheet } from "react-native";

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
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "red" : "black",
              }}
            >
              Explore
            </Text>
          ),
          tabBarStyle: { paddingBottom: 7, paddingTop: 5 },
          tabBarIcon: ({ focused }) => (
            <Entypo
              id="wallet"
              name="wallet"
              style={[
                styles.icon,
                {
                  backgroundColor: focused ? "red" : "black",
                },
              ]}
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
                fontSize: 10,
                color: focused ? "red" : "black",
              }}
            >
              For You
            </Text>
          ),
          tabBarStyle: { paddingBottom: 7, paddingTop: 5 },
          tabBarIcon: ({ focused }) => (
            <Entypo
              id="home"
              name="home"
              style={[
                styles.icon,
                {
                  backgroundColor: focused ? "red" : "black",
                },
              ]}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
