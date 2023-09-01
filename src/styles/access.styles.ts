import { StyleSheet } from "react-native";

export const accessStyles = StyleSheet.create({
    gradient_container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        paddingTop: 40,
        alignItems: "center",
    },
    header_text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'SourceCode',
    },
    button_container: {
        flexDirection: "row",
        marginTop: 5
    },
    inline_button_text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "SourceCode",
        marginLeft: 5, 
        marginRight: 5
    },
    button: {
        margin: 5,
    }
})
