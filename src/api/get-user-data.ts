import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const getUserData = async () => await axios.get(`https://9698-5-173-16-56.ngrok-free.app/user/me`, {
    headers: {
        Cookie: await AsyncStorage.getItem("access_token")
    }
}).then(res => res.data)
    .catch(async err => {
        await AsyncStorage.removeItem("access_token");
    });


