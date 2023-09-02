import { Flex, Stack } from "@react-native-material/core";
import { View, Text } from "react-native";
import { navigate } from "../routes/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { walletStyles } from "../styles";

export const Profile = () => {
  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={walletStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <View style={walletStyles.header_container}>
            {/* Header */}
          </View>
          <Text style={walletStyles.header_text}>It's me, and we are gonna learn C++</Text>
      </LinearGradient>
    </Flex>
  );
};
