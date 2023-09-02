import {Box, Flex, Stack} from "@react-native-material/core";
import {View, Text, Pressable, Image} from "react-native";
import {navigate} from "../routes/navigation";
import {LinearGradient} from "expo-linear-gradient";
import {walletStyles} from "../styles";
import ProfileImage from "../components/profile-image";
import {useUserContext} from "../context/auth-context";
import {CustomBottomSheetModal} from "../components";
import React from "react";

export const WalletScreen = () => {
    const {user} = useUserContext();

    return (
        <Flex fill center>
            <LinearGradient
                colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
                style={walletStyles.gradient_container}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={walletStyles.header_container}>
                    <Pressable onPress={() => navigate("Profile")}>
                        {/*<ProfileImage style={walletStyles.avatar}/>*/}
                        <Image
                            source={require("../assets/images/profile-image.png")}
                            style={[
                                {
                                    width: 65,
                                    height: 65,
                                    borderRadius: 65 /2
                                },
                                walletStyles.avatar
                            ]}
                        />
                    </Pressable>
                </View>
                <Text style={walletStyles.header_text}>Balance</Text>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <Text style={{fontSize: 40, color: "white"}}>{(user?.balance || 0.00).toFixed(2)}</Text>
                    <Image
                        source={require("../assets/images/glow.png")}
                        style={{
                            width: 70,
                            height: 70
                        }}
                    />
                </View>
                <View style={{
                    padding: 5,
                    height: 200,
                    backgroundColor: "#00000040",
                    justifyContent: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}>
                    <Text style={walletStyles.invite_text}>Earn more SportCoins</Text>
                    <Text style={walletStyles.invite_text}>Invite more friends and earn from 10 to 1000 SX Coins from each invited friends</Text>
                    <LinearGradient
                        colors={['#574aff', '#6d61ff']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={{
                            width: 200,
                            height: 55,
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
                        >
                            <Text style={{
                            color: "white",
                            fontSize: 25,
                            // fontWeight: "bold",
                            fontFamily: "Oswald"
                        }}>Invite Friends</Text>

                        </Pressable>
                    </LinearGradient>
                </View>
            </LinearGradient>
            <CustomBottomSheetModal />
        </Flex>
    );
};
