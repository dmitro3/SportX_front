import { Text } from "react-native";
import { navigate } from "../routes/navigation";
import { Button, Flex } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { accessStyles } from "../styles";

export const AccessScreen = () => {
  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={accessStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={accessStyles.header_text}>Access Screeen</Text>
        <Button onPress={() => navigate("Tabs")} title="Go to Home"></Button>
      </LinearGradient>
    </Flex>
  );
};
