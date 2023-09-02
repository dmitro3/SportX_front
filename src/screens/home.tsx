import { View } from "react-native";
import { Flex } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";
import MapView, { Marker, Polygon } from "react-native-maps";
import {CustomBottomSheetModal, Steps, StickyBalance} from "../components";
import React from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";

export const Home = () => {
  const [coordinates, setCoordinates] = useState<any>(null);
  const [startCoordinates, setStartCoordinates] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  const [distance, setDistance] = useState<any>(null);
  const [duration, setDuration] = useState<any>(null);

  useEffect(() => {
    Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High, timeInterval: 10 },
      (new_location) => {
        if (startCoordinates === null) {
          // If startCoordinates are null, set them to the initial location
          setStartCoordinates(new_location);
          setLocation(new_location);
        } else {
          // Compare the previous location with the new location
          if (
            startCoordinates.coords.latitude !== new_location.coords.latitude ||
            startCoordinates.coords.longitude !== new_location.coords.longitude
          ) {
            setLocation(new_location);
          } else {
            setStartCoordinates(new_location);
            setLocation(new_location);
          }
        }
      }
    );
  }, [setLocation, location]);

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
            <Marker
              coordinate={
                startCoordinates
                  ? startCoordinates.coords
                  : {
                      latitude: 0,
                      longitude: 0,
                    }
              }
            />
            <MapViewDirections
              origin={{
                latitude: startCoordinates ? startCoordinates.coords.latitude: 52.220483708660666,
                longitude: startCoordinates ? startCoordinates.coords.longitude : 21.010548886134075,
              }}
              destination={{
                latitude: location ? location.coords.latitude : 52.220483708660666,
                longitude: location ? location.coords.longitude: 21.010548886134075,
              }}
              apikey={"AIzaSyDAQ9SXy13xbnnCR6xFacVIGUp5Ll_DZrU"}
              mode="WALKING"
              strokeWidth={3}
              strokeColor="hotpink"
              onStart={(result: any) => {
                setDistance(result.distance);
                setDuration(result.duration);
              }}
            />
            {coordinates &&
              coordinates.map((item: any, index: number) => (
                <Polygon
                  key={index}
                  coordinates={item}
                  strokeWidth={0.6}
                  strokeColor={"blue"}
                  fillColor={"rgba(0, 255, 0,.3)"}
                />
              ))}
          </MapView>
        </View>
      </LinearGradient>
        <CustomBottomSheetModal />
    </Flex>
  );
};
