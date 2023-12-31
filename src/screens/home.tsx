import {View} from "react-native";
import {Flex} from "@react-native-material/core";
import {LinearGradient} from "expo-linear-gradient";
import {homeStyles} from "../styles";
import {useEffect, useState} from "react";
import axios from "axios";
import MapView, {Marker, Polygon} from "react-native-maps";
import {CustomBottomSheetModal, Steps, StickyBalance} from "../components";
import React from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import {useUserContext} from "../context/auth-context";
import {useModal} from "../hooks/useModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BuyModal} from "../components/buy-modal";
import {getDistance, getPreciseDistance} from 'geolib';
import {getUserData} from "../api/get-user-data";

export const Home = () => {
  const {setUser} = useUserContext();
  const calculatePreciseDistance = async (start: any, end: any) => {
    let pdis = getPreciseDistance(
      start,
      end
    );
    await axios.post("https://9698-5-173-16-56.ngrok-free.app/user/update", {
      amount: pdis / 10
    }, {
      headers: {
        Cookie: await AsyncStorage.getItem("access_token")
      }
    }).then(async res => {
      console.log(res.data);
      const user = await getUserData();
      setUser(user)
    })
    console.log(`Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM, balance:${pdis / 10}`);
  };
  const [coordinates, setCoordinates] = useState<any>(null);
  const [startCoordinates, setStartCoordinates] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  const {user} = useUserContext();
  const {openModal} = useModal();
  const [distance, setDistance] = useState<any>(null);
  const [duration, setDuration] = useState<any>(null);
  const getLocation = async () => {
    return await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 1,
        timeInterval: 10000
      },
      async new_location => {

        if (startCoordinates === null) {
          setLocation(new_location);
          setStartCoordinates(new_location)
        } else {
          // Compare the previous location with the new location
          if (
            startCoordinates.coords.latitude !== new_location.coords.latitude ||
            startCoordinates.coords.longitude !== new_location.coords.longitude
          ) {
            setLocation(new_location);
          } else {
            setLocation(new_location);
          }
        }
      }
    );
  }
  const [isRegionWasByed, setIsRegionWasByed] = useState<boolean>(false);

  useEffect(() => {
    const func = async () => {
      axios
        .get("https://9698-5-173-16-56.ngrok-free.app/maps/polygons", {
          headers: {
            Cookie: await AsyncStorage.getItem("access_token")
          }
        })
        .then((res) => {
          setCoordinates(res.data);
          getLocation();
        });
    }

    func();
  }, []);

  const handleLandscapeOwning = async () => {
    await axios.post("https://9698-5-173-16-56.ngrok-free.app/maps/buy", {
      regionId: 2536106
    }, {
      headers: {
        Cookie: await AsyncStorage.getItem("access_token")
      }
    });
    setIsRegionWasByed(true)
  }
  useEffect(() => {
    if (startCoordinates !== null) {
      setTimeout(async () => {
        calculatePreciseDistance({
          latitude: startCoordinates.coords.latitude,
          longitude: startCoordinates.coords.longitude
        }, {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }, 3000)

    }
  }, [location]);

  const mapPressed = (event: any) => {
    // const pointCoords = [event.nativeEvent.coordinate.longitude,
    //     event.nativeEvent.coordinate.latitude];
    //
    // console.log(event.nativeEvent)
    // const  inPolygon = pointInPolygon(
    //     { 'type': 'Point', 'coordinates': pointCoords },
    //     { 'type': 'Polygon', 'coordinates': [coordinates] }
    // );

    openModal();
  }


  return (
    <Flex fill center>
      <LinearGradient
        colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
        style={homeStyles.gradient_container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <Steps/>
        <StickyBalance/>
        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "white",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <MapView
            style={{flex: 1, width: "100%", height: "100%"}}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomControlEnabled={false}
            loadingEnabled={true}
            showsCompass={true}
            showsMyLocationButton={true}
            initialRegion={{
              latitude: 52.237049,
              longitude: 21.017532,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={mapPressed}
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
                latitude: startCoordinates ? startCoordinates.coords.latitude : 52.220483708660666,
                longitude: startCoordinates ? startCoordinates.coords.longitude : 21.010548886134075,
              }}
              destination={{
                latitude: location ? location.coords.latitude : 52.220483708660666,
                longitude: location ? location.coords.longitude : 21.010548886134075,
              }}
              apikey={"AIzaSyDAQ9SXy13xbnnCR6xFacVIGUp5Ll_DZrU"}
              mode="WALKING"
              strokeWidth={3}
              strokeColor="hotpink"
              onStart={async (result: any) => {
                setDistance(result.distance);
                setDuration(result.duration);
              }}
            />
            {coordinates &&
              coordinates.map((item: any, index: number) => (
                <Polygon
                  key={index}
                  coordinates={item.polygon}
                  strokeWidth={0.6}
                  strokeColor={"blue"}
                  fillColor={item.polygon.find((el: {
                    isBuy: boolean;
                  }) => el.isBuy) ? "#FFA50060" : "rgba(0, 255, 0,.3)"}
                />
              ))}
          </MapView>
        </View>
      </LinearGradient>
      <CustomBottomSheetModal/>
      <BuyModal buy={handleLandscapeOwning}/>
    </Flex>
  );
};
