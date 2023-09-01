import { View, Text } from "react-native";
import { navigate } from "../routes/navigation";
import { Button, Flex } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "../styles";

export const Home = () => {
  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={homeStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={homeStyles.header_text}>Home Screeen</Text>
        <Button onPress={() => navigate("Login")} title="Go to Login"></Button>
      </LinearGradient>
    </Flex>
  );
};
