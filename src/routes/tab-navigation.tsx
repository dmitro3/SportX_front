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
import { Flex } from "@react-native-material/core";

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
              Home
            </Text>
          ),
          tabBarStyle: { paddingBottom: 7, paddingTop: 5 },
          tabBarIcon: ({ focused }) => (
            <Entypo
              id="home"
              name="home"
              style={[
                {
                  backgroundColor: focused ? "#ff33ff" : "transparent",
                },
              ]}
              size={20}
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
              Wallet
            </Text>
          ),
          tabBarStyle: { paddingBottom: 7, paddingTop: 5 },
          tabBarIcon: ({ focused }) => (
           <View style={styles.icon_container} >
             <Entypo
              id="wallet"
              name="wallet"
              style={[
                {
                  backgroundColor: focused ? "red" : "transparent",
                },
              ]}
              size={20}
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
