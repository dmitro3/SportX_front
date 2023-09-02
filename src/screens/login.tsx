// ui components
import {Avatar, Button, Flex, Stack} from "@react-native-material/core";
import {Text, Alert, Pressable, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
// @ts-ignore
import cookie from 'cookie-parse'; // Используйте cookie-parse или аналогичную библиотеку
import * as WebBrowser from 'expo-web-browser';
import * as Linking from "expo-linking"
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

export const Login = () => {
  const { isOpen, open, close, provider, isConnected, address } =
    useWalletConnectModal();
  provider?.disconnect();

    const {setUser} = useUserContext();
    const _handlePressButtonAsync = async () => {
        const callbackUrl = Linking.createURL("App", {scheme: "mobile"})
        console.log(callbackUrl)

        let result = await WebBrowser.openAuthSessionAsync(`https://9f23-5-173-16-56.ngrok-free.app/auth/discord?redirect_url=${callbackUrl}`, callbackUrl, {
            preferEphemeralSession: true
        });
        console.log(result)
    };

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
            const result = await axios.post(`https://9f23-5-173-16-56.ngrok-free.app/auth/web3`, {
                address: address
            }, {
                withCredentials: true
            });

            // @ts-ignore
            const cookieArray = result.headers.get("set-cookie");
            // Пример обработки куки и извлечения access_token
            if (cookie && !await AsyncStorage.getItem("access_token")) {
                const cookies = cookie.parse(cookieArray[0]); // Парсинг куки
                const accessToken = cookies.access_token; // Извлечение access_token
                await AsyncStorage.setItem("access_token", `${accessToken}`)
            } else {
                console.error('Set-Cookie header not found in response');
            }
            if (result.status === 200) {
                const userMe = await getUserData();

                await setUser(userMe);
                navigationHandler();
            } else {
                Alert.alert("Error", "Something went wrong")
            }
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
          {/* <Button
            onPress={() => loginHandler("wallet")}
            title="Go to next page"
            style={loginStyles.button}
          /> */}
          {/* <Button
            onPress={() => navigate("AccessScreen")}
            title="Discord Login"
            style={loginStyles.button}
          /> */}
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
      </LinearGradient>
    </Flex>
  );
};
