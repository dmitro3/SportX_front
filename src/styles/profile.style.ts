import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
    gradient_container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    header_container: {
        width: "100%",
        height: 50,
        marginTop: 25,
        alignItems: "flex-end",
    },
    avatar: {
        marginRight: 15,
    },
    header_text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    sub_title: {
        color: "white",
        fontSize: 20,
        fontFamily: "Oswald"
    },
    button: {
        margin: 5,
    }
})
