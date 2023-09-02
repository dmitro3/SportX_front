import { Flex, Stack } from "@react-native-material/core";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { profileStyles } from "../styles";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { useUserContext } from "../context/auth-context";
import { ProfileImage } from "../components";

export const Profile = () => {

      const { user } = useUserContext();

  const { provider } = useWalletConnectModal();
  const web3Exist = () => {
    provider?.disconnect();
  }

  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={profileStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <ProfileImage  style={profileStyles.avatar}/>
          <Text style={profileStyles.header_text}>{user?.username}</Text>
          <Text style={profileStyles.sub_title}>{user?.email}</Text>
      </LinearGradient>
    </Flex>
  );
};
