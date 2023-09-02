import { View, Text, Image } from "react-native";
import { useUserContext } from "../context/auth-context";

export const StickyBalance = () => {
    const { user } = useUserContext();
    return (
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            zIndex: 10000,
            alignItems: "center",
            top: 20,
            right: 20,
            padding: 5,
            backgroundColor: "red",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{user?.balance}</Text>
          <Image
            source={require("../assets/images/glow.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
    )
}
