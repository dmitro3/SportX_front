// ui
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useBottomSheet } from "../context/bottom-sheet-context";

// navigation
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

// screens
import { Home } from "../screens";
import { WalletStackNavigation } from "./wallet-stack";

// hooks
import { useEffect } from "react";
import { TabDataProvider, useTabData } from "../context/tab-context";

const TabNavigator = () => {
  const { selectedTab, setSelectedTab, fetchData } = useTabData();
  const { isOpen, handleBottomSheet} = useBottomSheet();

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const _renderIcon = (routeName: string, selectedTab: any) => {
    switch (routeName) {
      case "Home":
        return (
          <Image
            style={[
              {
                width: 50,
                height: 50,
              },
              selectedTab === routeName && {
                ...styles.shadow,
                shadowColor: "#581E88",
                shadowRadius: 4,
                shadowOpacity: 1,
                overflow: "hidden",
              },
            ]}
            source={require("../assets/images/home.png")}
          />
        );
      case "WalletStack":
        return (
          <Image
            style={[
              {
                width: 80,
                height: 80,
              },
              selectedTab === routeName && {
                ...styles.shadow,
                shadowColor: "#581E88",
                shadowRadius: 10,
                overflow: "hidden",
              },
            ]}
            source={require("../assets/images/wallet.png")}
          />
        );
    }
  };

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
        onPress={() => {
          setSelectedTab(routeName);
          navigate(routeName);
        }}
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
        headerShown: false,
        tabBarItemStyle: {
          backgroundColor: "transparent",
        },
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
          onPress={handleBottomSheet}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("../assets/images/main.png")}
          />
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

export const TabNavigation = () => (
  <TabDataProvider>
    <TabNavigator />
  </TabDataProvider>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 18,
    shadowColor: "#000",
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
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
