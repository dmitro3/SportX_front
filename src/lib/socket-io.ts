import * as io from "socket.io-client";
import { EXPO_BACKEND_URL } from "@env";

const socket = io.connect(EXPO_BACKEND_URL);

export default socket;
