// components
import { Alert, Text } from "react-native";
import { Button, Flex, Pressable, Stack } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
// styles
import { accessStyles } from "../styles";
// navigation
import { navigate } from "../routes/navigation";
// location
import * as Location from "expo-location";
// storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AccessScreen = () => {
  const handleNavigateToLoginPage = () => navigate("Login");

  const handleAcceptGeolocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      await AsyncStorage.setItem("@Expo_Location_Access:", "false");
      return;
    } else {
      await AsyncStorage.setItem("@Expo_Location_Access:", "true");
      navigate("Tabs")
      return;
    }
  };

  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={accessStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={accessStyles.header_text}>
          Our app requires access to your geolocation to work more accurately.
          Please allow it.
        </Text>
        <Stack style={accessStyles.button_container}>
          <Pressable onPress={handleAcceptGeolocation}>
            <Text style={accessStyles.inline_button_text}>Yes</Text>
          </Pressable>
          <Text style={accessStyles.inline_button_text}>/</Text>
          <Pressable onPress={handleNavigateToLoginPage}>
            <Text style={accessStyles.inline_button_text}>No</Text>
          </Pressable>
        </Stack>
        {/* <Button onPress={() => navigate("Tabs")} title="Go to Home"></Button> */}
      </LinearGradient>
    </Flex>
  );
};
