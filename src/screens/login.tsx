// ui components
import { Button, Flex } from "@react-native-material/core";
import { Text, Alert, Pressable, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// navigation
import { navigate } from "../routes/navigation";

// styles
import { loginStyles } from "../styles";

// wallet connections
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { projectId, providerMetadata } from "../lib/wallet-connect";
import axios from "axios";
import { useUserContext } from "../context/auth-context";
import { getUserData } from "../api/get-user-data";
import { CookieJar } from "tough-cookie";
import { CustomBottomSheetModal } from "../components";

export const Login = () => {
  const { open, close, provider, isConnected, address } =
    useWalletConnectModal();

  const { setUser } = useUserContext();

  const navigationHandler = async () => {
    const value = await AsyncStorage.getItem("@Expo_Location_Access:");
    if (value !== null && value === "true") {
      navigate("Tabs");
    } else {
      navigate("AccessScreen");
    }
  };

  const loginHandler = async (type: string) => {
    if (type === "wallet") {
      const result = await axios.post(
        `https://0809-5-173-16-56.ngrok-free.app/auth/web3`,
        {
          address: address,
        }
      );

      if (result.status === 200) {
        // await AsyncStorage.setItem("@Expo_AccessToken:": `${result.headers.}`)
        const cookies = new CookieJar().getCookies(
          "https://0809-5-173-16-56.ngrok-free.app"
        );

        const userMe = await getUserData();

        await setUser(userMe.data);
        navigationHandler();
      } else {
        Alert.alert("Error", "Something went wrong");
      }
    }
  };

  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={loginStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <Text style={loginStyles.header_text}>SportX</Text>
         <View style={{
          justifyContent: "center",
          alignItems: "center",
         }}>
         <Text style={loginStyles.header_second}>Healthy</Text>
          <Text style={loginStyles.header_third}>Ride</Text>
          <Text style={loginStyles.header_fourth}>Run</Text>
          <Text style={loginStyles.header_fifth}>Earn</Text>
         </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <Pressable onPress={() => navigate("AccessScreen")} style={{
                  width: 100,
                  height: 100,
                }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%"
                }}
                source={require("../assets/images/discord.png")}
              />
            </Pressable>
            <Pressable onPress={() => open()}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                }}
                source={require("../assets/images/wallet_connect.png")}
              />
            </Pressable>
          </View>
          <WalletConnectModal
            projectId={projectId}
            providerMetadata={providerMetadata}
          />
          <CustomBottomSheetModal />
      </LinearGradient>
    </Flex>
  );
};
