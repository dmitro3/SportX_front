import { Button, Flex, Stack } from "@react-native-material/core";
import { View, Text } from "react-native";
import { navigate } from "../routes/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { loginStyles } from "../styles";
export const Login = () => {
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
            onPress={() => navigate("AccessScreen")}
            title="Go to next page"
            style={loginStyles.button}
          />
          <Button
            onPress={() => navigate("AccessScreen")}
            title="Discord Login"
            style={loginStyles.button}
          />
          <Button
            onPress={() => navigate("AccessScreen")}
            title="Wallet Connect"
            style={loginStyles.button}
          />
        </Stack>
      </LinearGradient>
    </Flex>
  );
};
