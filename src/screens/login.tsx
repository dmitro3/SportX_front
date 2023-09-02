// ui components
import { Button, Flex, Stack } from "@react-native-material/core";
import { Text, Alert } from "react-native";
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
import { EXPO_BACKEND_URL } from "@env"
import { useUserContext } from "../context/auth-context";

export const Login = () => {
  const { isOpen, open, close, provider, isConnected, address } =
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
    if(type === "wallet") {
      const result = await axios.post(`https://0809-5-173-16-56.ngrok-free.app/auth/web3`, {
        address: address
      });

      if(result.status === 200) {
        const userMe = await axios.get(`https://0809-5-173-16-56.ngrok-free.app/user/me`);
        
        await setUser(userMe.data);
        navigationHandler();
      } else {
        Alert.alert("Error", "Something went wrong")
      }
    }
  }

  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={loginStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Stack>
          <Text style={loginStyles.header_text}>Welcome</Text>
          <Button
            onPress={() => loginHandler("wallet")}
            title="Go to next page"
            style={loginStyles.button}
          />
          <Button
            onPress={() => navigate("AccessScreen")}
            title="Discord Login"
            style={loginStyles.button}
          />
          <Button
            onPress={() => open()}
            title="Wallet Connect"
            style={loginStyles.button}
          />
          <WalletConnectModal
            projectId={projectId}
            providerMetadata={providerMetadata}
          />
        </Stack>
      </LinearGradient>
    </Flex>
  );
};
