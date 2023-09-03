import {useModal} from "../hooks/useModal";
import {BottomSheet} from "react-native-btr";
import {View, StyleSheet, Text, Image} from "react-native";
import {Button} from "@react-native-material/core";
import {Dispatch, SetStateAction} from "react";

interface Props {
    buy: () => void;
}
export const BuyModal = ({ buy }:Props) => {
    const { isOpenModal, closeModal, openModal } = useModal();

    return (
        <BottomSheet
            visible={isOpenModal}
            onBackButtonPress={closeModal}
            onBackdropPress={closeModal}
        >
            <View style={styles.bottomNavigationView}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{
                        fontFamily: "Rubik",
                        fontSize: 20,
                    }}>Mokotów: 1000</Text>
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,

                        }}
                        source={require('../assets/images/glow__1_-removebg-preview.png')}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <Button title={"Buy"} onPress={buy}></Button><Button title={"Cancel"} onPress={closeModal} style={{marginLeft: 5}}></Button>
                </View>
            </View>
        </BottomSheet>

    )
}


const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: "#fff",
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    }
})