import { Flex, Stack } from "@react-native-material/core";
import { View, Text, Pressable, Image} from "react-native";
import { navigate } from "../routes/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { walletStyles } from "../styles";
import ProfileImage from "../components/profile-image";
import { useUserContext } from "../context/auth-context";
import { CustomBottomSheetModal } from "../components";


export const WalletScreen = () => {
  const { user } = useUserContext();
  console.log(user)
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
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%"}} >
            <Text style={{ fontSize: 20, color: "white" }}>{user?.balance}</Text>
            <Image 
              source={require("../assets/images/glow.png")}
              style={{
                width: 50,
                height: 50
              }}
            />
          </View>
      </LinearGradient>
    </Flex>
  );
};
