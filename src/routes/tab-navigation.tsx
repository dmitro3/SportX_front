// ui
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text
} from "react-native";

// navigation
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

// screens
import { Home } from "../screens";
import { WalletStackNavigation } from "./wallet-stack";

import Ionicons from "react-native-vector-icons/Ionicons";

export const TabNavigation = () => {
  const _renderIcon = (routeName: string, selectedTab: any) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = "ios-home-outline";
        break;
      case "WalletStack":
        icon = "wallet-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };

  const _renderSelectedTab = (selectedTab: string) => {
    let icon = "";

    switch (selectedTab) {
      case "Home":
        icon = "ios-home-outline";
        break;
      case "WalletStack":
        icon = "wallet-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
      />
    );
  }
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: any;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      type="DOWN"
      style={styles.shadow}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="white"
      tabBar={renderTabBar}
      circlePosition={"CENTER"}
      renderCircle={({ selectedTab, navigate, routeName }) => (
          <TouchableOpacity
            style={[styles.btnCircle]}
            onPress={() => {
              navigate(routeName);
            }}
          >
            {_renderSelectedTab(selectedTab)}
          </TouchableOpacity>
      )}
    >
      <CurvedBottomBarExpo.Screen
        name="Home"
        position="LEFT"
        component={Home}
      />
      <CurvedBottomBarExpo.Screen
        name="WalletStack"
        position="RIGHT"
        component={WalletStackNavigation}
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
