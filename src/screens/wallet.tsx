import { Flex, Stack } from "@react-native-material/core";
import { View, Text } from "react-native";
import { navigate } from "../routes/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { walletStyles } from "../styles";

export const WalletScreen = () => {
  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={walletStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Stack>
          <Text style={walletStyles.header_text}>Wallet Screen</Text>
        </Stack>
      </LinearGradient>
    </Flex>
  );
};
