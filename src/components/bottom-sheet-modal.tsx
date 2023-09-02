import React, { useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import { BottomSheet } from "react-native-btr";
import { useBottomSheet } from "../hooks/useBottomSheet";

export const CustomBottomSheetModal = () => {
  const { isOpenModal, closeModal } = useBottomSheet();
  return (
    <BottomSheet
      visible={isOpenModal}
      //setting the visibility state of the bottom shee
      onBackButtonPress={close}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={close}
    >
      <View style={styles.bottomNavigationView}>
        <Text>Awesome 🎉</Text>
        <Button onPress={close} title="Close"></Button>
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
