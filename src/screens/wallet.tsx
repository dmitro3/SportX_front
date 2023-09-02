import { Avatar, Flex, Stack } from "@react-native-material/core";
import { View, Text, Pressable } from "react-native";
import { navigate } from "../routes/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { walletStyles } from "../styles";
import { Image } from "react-native-svg";
import ProfileImage from "../components/profile-image";


export const WalletScreen = () => {
  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={walletStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <View style={walletStyles.header_container}>
            <Pressable onPress={() => navigate("Profile")}>
              <ProfileImage  style={walletStyles.avatar}/>
            </Pressable>
          </View>
          <Text style={walletStyles.header_text}>Balance</Text>
      </LinearGradient>
    </Flex>
  );
};
