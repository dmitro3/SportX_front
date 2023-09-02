import React, { useCallback, useMemo } from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Button } from "@react-native-material/core";
import { BottomSheet } from "react-native-btr";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { useState } from "react";
import {LinearGradient} from "expo-linear-gradient";

export const CustomBottomSheetModal = () => {
  const { isOpenModal, closeModal } = useBottomSheet();
  const [ activeTab, setActiveTab ] = useState<"BUS"|"BIKE"|"SNICKERS">("SNICKERS");

  return (
    <BottomSheet
      visible={isOpenModal}
      //setting the visibility state of the bottom shee
      onBackButtonPress={closeModal}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={closeModal}
    >
      <View style={styles.bottomNavigationView}>
        <Text style={{ fontFamily: "Oswald", fontSize: 25, marginTop: 25 }}> CHOOSE YOUR MOVING STYLE</Text>
        <View style={{ marginBottom: "auto", marginTop: 10, flexDirection: "row"}}>
          <Pressable
              onPress={() => setActiveTab("SNICKERS")}
              style={[
                styles.icon,
                {
                  backgroundColor: activeTab === "SNICKERS" ? "#00000030" : "transparent",
                },
                activeTab === "SNICKERS" && {...styles.shadow},
              ]}
          >
            <Image
                source={require("../assets/images/nfts/nft-snickers3.png")}
                style={styles.image}
            />
          </Pressable>
          <Pressable
              onPress={() => setActiveTab("BIKE")}
              style={[
            styles.icon,
            {
              backgroundColor: activeTab === "BIKE" ? "#00000030" : "transparent",
            },
            activeTab === "BIKE" && {...styles.shadow},
          ]}>
            <Image
                source={require("../assets/images/nfts/nft-bike3.png")}
                style={styles.image}
            />
          </Pressable>
          <Pressable
              onPress={() => setActiveTab("BUS")}
              style={[
                styles.icon,
                {
                  backgroundColor: activeTab === "BUS" ? "#00000030" : "transparent",
                },
                activeTab === "BUS" && {...styles.shadow},
              ]}
          >
            <Image
                source={require("../assets/images/nfts/nft-bus4.png")}
                style={styles.image}
            />
          </Pressable>
        </View>
        <LinearGradient
            colors={['#574aff', '#6d61ff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              width: 200,
              height: 45,
              justifyContent: 'center',
              alignItems: "center",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              alignSelf: "center"
            }}
        >
          <Pressable
              style={{
                backgroundColor: "transparent",
                shadowColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
              onPress={closeModal}
          >
            <Text style={{
              color: "white",
              fontSize: 25,
              fontFamily: "Oswald"
            }}>Choose</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  icon: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    margin: 2,
  },
  image: {
    width: 115,
    height: 115,
    objectFit: "contain"
  },
  shadow: {
    shadowColor: '#581E88',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  }
});
