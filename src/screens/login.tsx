// ui components
import {Avatar, Button, Flex, Stack} from "@react-native-material/core";
import {Text, Alert, Pressable, Image, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
// @ts-ignore
import cookie from 'cookie-parse'; // Используйте cookie-parse или аналогичную библиотеку
import * as WebBrowser from 'expo-web-browser';
import * as Linking from "expo-linking"
// storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// navigation
import {navigate} from "../routes/navigation";

// styles
import {loginStyles} from "../styles";

// wallet connections
import {
    WalletConnectModal,
    useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import {projectId, providerMetadata} from "../lib/wallet-connect";
import axios from "axios";
import {useUserContext} from "../context/auth-context";
import {getUserData} from "../api/get-user-data";
import {useEffect, useState} from "react";

export const Login = () => {
    const {isOpen, open, close, provider, isConnected, address} =
        useWalletConnectModal();

    const [isWalletConnectWasClicked, setIsWalletConectWasClicked] = useState<boolean>(false);
    useEffect(() => {
        const func = async () => {
            const value = await AsyncStorage.getItem("access_token");
        }
        func()
    }, [])

    const {setUser} = useUserContext();
    const _handlePressButtonAsync = async () => {
        const callbackUrl = Linking.createURL("App", {scheme: "mobile"})
        console.log(callbackUrl)

        let result = await WebBrowser.openAuthSessionAsync(`https://9698-5-173-16-56.ngrok-free.app/auth/discord?redirect_url=${callbackUrl}`, callbackUrl, {
            preferEphemeralSession: true
        });
        console.log(result)
    };

    const authHandler = async () => {
        const result = await getUserData();

        setUser(result);
        await navigationHandler();
    }

    const navigationHandler = async () => {
        const value = await AsyncStorage.getItem("@Expo_Location_Access:");
        if (value !== null && value === "true") {
            navigate("Tabs");
        } else {
            navigate("AccessScreen");
        }
    };

    const loginHandler = async (type: string) => {
        if (type === "wallet" && isConnected) {
            const result = await axios.post(`https://9698-5-173-16-56.ngrok-free.app/auth/web3`, {
                address: address
            }, {
                withCredentials: true
            });

            // @ts-ignore
            const cookieArray = result.headers.get("set-cookie");
            // Пример обработки куки и извлечения access_token
            if (cookie && !await AsyncStorage.getItem("access_token")) {
                const cookies = cookie.parse(cookieArray[0]); // Парсинг куки
                const accessToken = cookies.access_token; // Извлечение access_token
                await AsyncStorage.setItem("access_token", `${accessToken}`)
            } else {
                console.error('Set-Cookie header not found in response');
            }
            if (result.status === 200) {
                const userMe = await getUserData();

                setUser(userMe);
                await navigationHandler();
            } else {
                Alert.alert("Error", "Something went wrong")
            }
        }
    }

    return (
        <Flex fill center>
            <LinearGradient
                colors={["#1C2438", "#0D154F", "#142177", "#581E88"]}
                style={loginStyles.gradient_container}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    width: "100%",
                    marginTop: 20,
                }}>
                    <Text style={[loginStyles.header_text]}>SportX</Text>
                    <Text style={[loginStyles.subtitle, {marginTop: 10}]}>DO SPORTS AND EARN</Text>
                    <Text style={loginStyles.subtitle}>GET HEALTHIER AND EARN</Text>
                    <Text style={loginStyles.subtitle}>MOVE AND EARN</Text>
                </View>
                <View>
                    <Image
                        source={require("../assets/images/glow__1_-removebg-preview.png")}
                        style={{
                            height: 350,
                            width: 350
                        }}
                    />
                </View>
                <View style={{
                    marginBottom: 50,
                    width: "100%",
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%"
                        }}
                    >
                        <Pressable onPress={() => navigate("AccessScreen")} style={{
                            width: 100,
                            height: 100,
                        }}>
                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                                source={require("../assets/images/discord.png")}
                            />
                        </Pressable>
                        <Pressable onPress={() => {
                            setIsWalletConectWasClicked((prev: boolean) => !prev);
                            void open()
                        }}>
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60 / 2,
                                }}
                                source={require("../assets/images/wallet_connect.png")}
                            />
                        </Pressable>
                    </View>
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
                            onPress={() => isConnected && isWalletConnectWasClicked ? loginHandler("wallet") : authHandler()}
                        >
                            <Text style={{
                            color: "white",
                            fontSize: 25,
                            fontFamily: "Oswald"
                        }}>Login</Text>
                        </Pressable>
                    </LinearGradient>
                    <WalletConnectModal
                        projectId={projectId}
                        providerMetadata={providerMetadata}
                    />
                </View>
            </LinearGradient>
        </Flex>
    );
};
