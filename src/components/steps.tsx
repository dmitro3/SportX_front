import { View, Text, Image } from "react-native";
import { useUserContext } from "../context/auth-context";

export const Steps = () => {
    const { user } = useUserContext();
    return (
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            zIndex: 10000,
            alignItems: "center",
            top: 50,
            left: 20,
            padding: 10,
            backgroundColor: "#00000070",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,

          }}
        >
          <Image
            source={require("../assets/images/boots.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text style={{ color: "white", fontSize: 20 }}>{user?.balance}</Text>
        </View>
    )
}
