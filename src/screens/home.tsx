import { View, Text, Image } from "react-native";
import { navigate } from "../routes/navigation";
import { Button, Flex } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";
import MapView, { Polygon } from "react-native-maps";

export const Home = () => {
  const [coordinate, setCoordinate] = useState([]);
  useEffect(() => {
    axios
      .get("https://0809-5-173-16-56.ngrok-free.app/maps/polygons")
      .then((res) => {
        setCoordinate(res.data);
      });
  }, []);

  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={homeStyles.gradient_container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
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
          <Text style={{ color: "white", fontSize: 20 }}>0.000</Text>
          <Image
            source={require("../assets/images/glow.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            width: "100%",
            borderWidth: 1,
            backgroundColor: "white",
          }}
        >
          <MapView
            style={{ flex: 1, width: "100%", height: "100%" }}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomControlEnabled={true}
            loadingEnabled={true}
            showsCompass={true}
            showsMyLocationButton={true}
            initialRegion={{
              latitude: 52.237049,
              longitude: 21.017532,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {coordinate.map((item: any, index) => (
              <Polygon
                key={index}
                coordinates={item}
                strokeWidth={0.6}
                strokeColor={"blue"}
                fillColor={"rgba(255, 0, 0,.3)"}
              />
            ))}
          </MapView>
        </View>
        <View style={{ flex: 1, width: "100%" }}>{/* Statistics */}</View>
      </LinearGradient>
    </Flex>
  );
};
