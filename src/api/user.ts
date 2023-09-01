// environment
import { EXPO_BACKEND_URL } from "@env";
// axios
import axios from "axios";

export const signInViaWalletConnect = async (address: string) => {
    const result = await axios.post(`${EXPO_BACKEND_URL}/auth/wallet`, {
        address: address
    })

    return result;
}

export const signInViaDiscord = async () => {
    return await axios.post(`${EXPO_BACKEND_URL}/auth/discord`, {});
}
