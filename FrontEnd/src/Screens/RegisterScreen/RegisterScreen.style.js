import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-paper";

const registerScreenStyle = StyleSheet.create({
    content: {
        padding: 15,
        paddingTop: 0,
        marginTop: 5,
        color: 'rgb(101,37,131)'
    },

    cardTitle: {
        marginTop: 10,
    },

    appBarStyle: {
        marginTop: 25,
    },

    button: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
    }
})

export default registerScreenStyle;