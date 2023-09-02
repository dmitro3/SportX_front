import { View, Text, Image } from "react-native";
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
        <View style={{position:"absolute", flexDirection: "row",  zIndex: 10000, alignItems: "center", top: 20, right: 20, padding: 5, backgroundColor: "red", borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
          <Text style={{ color: "white", fontSize: 20}}>0.000</Text>
          <Image 
              source={require("../assets/images/glow.png")}
              style={{
                width: 50,
                height: 50
              }}
            />
        </View>
        <View style={{ flex: 2, width: "100%", borderWidth: 1, backgroundColor: "white"}}>
          {/* MAPS */}
        </View>
        <View style={{ flex: 1, width: "100%"}}>
          {/* Statistics */}
        </View>
      </LinearGradient>
    </Flex>
  );
};
