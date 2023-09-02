import { View, Text, Image } from "react-native";
import { Button, Flex } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";
import MapView, { Marker, Polygon } from 'react-native-maps';
import { Steps, StickyBalance } from "../components";
import React from "react";
import MapViewDirections from "react-native-maps-directions";

export const Home = () => {
  const [coordinates, setCoordinates] = useState<any>(null);
  
// // Пример 
  
//   useEffect(() => {
//     Location.watchPositionAsync({accuracy: Location.Accuracy.High, timeInterval: 10}, (new_location) => {
//       const end = new_location;
//       const calculatedSpeed = calculateSpeed(new_location);
//       console.log("calculatedSpeed", calculatedSpeed)
//       setLocation(new_location);
//     })
//   }, [setLocation,location]);
  
  useEffect(() => {
    axios
      .get("https://9698-5-173-16-56.ngrok-free.app/maps/polygons")
      .then((res) => {
        setCoordinates(res.data);
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
        <Steps />
        <StickyBalance />
        <View
          style={{
            flex: 2,
            width: "100%",
            backgroundColor: "white",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
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
            <MapViewDirections
          origin={coordinates}
          destination={props.region}
          apikey={API_MAP.API}
          strokeWidth={3}
          strokeColor="hotpink"
          onReady={result => {
            console.log(result)
          }}
        />
            {coordinates && coordinates.map((item: any, index: number) => (
              // <React.Fragment key={index}>
              <Polygon
                key={index}
                coordinates={item}
                strokeWidth={0.6}
                strokeColor={"blue"}
                fillColor={"rgba(255, 0, 0,.3)"}
              />

              // </React.Fragment>
            ))}
          </MapView>
        </View>
      </LinearGradient>
    </Flex>
  );
};
