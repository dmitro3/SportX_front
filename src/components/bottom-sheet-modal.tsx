import React, { useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useBottomSheet } from "../context/bottom-sheet-context";
import { Button } from "@react-native-material/core";
import { BottomSheet } from "react-native-btr";

export const CustomBottomSheetModal = () => {
  const { isOpen, handleBottomSheet } = useBottomSheet();
  return (
    <BottomSheet
      visible={!isOpen}
      //setting the visibility state of the bottom shee
      onBackButtonPress={handleBottomSheet}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={handleBottomSheet}
    >
      <View style={styles.bottomNavigationView}>
        <Text>Awesome 🎉</Text>
        <Button onPress={handleBottomSheet} title="Close"></Button>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
