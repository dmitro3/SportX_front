// ui components
import { Button, Flex, Stack } from "@react-native-material/core";
import { Text } from "react-native";
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

export const Login = () => {
  const { isOpen, open, close, provider, isConnected, address } =
    useWalletConnectModal();

  const navigationHandler = async () => {
    const value = await AsyncStorage.getItem("@Expo_Location_Access:");
    if (value !== null && value === "true") {
      navigate("Tabs");
    } else {
      navigate("AccessScreen");
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
        <Stack>
          <Text style={loginStyles.header_text}>Welcome</Text>
          <Button
            onPress={navigationHandler}
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
