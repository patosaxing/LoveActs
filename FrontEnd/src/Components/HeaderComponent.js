import React from "react";
import { Appbar } from "react-native-paper";
import registerScreenStyle from "../Screens/RegisterScreen/RegisterScreen.style";

const HeaderComponent = (props) => {
    return(
        <Appbar style = {registerScreenStyle.appBarStyle}>
            <Appbar.BackAction />
            <Appbar.Content title = {props.title} />
        </Appbar>
    )
}

export default HeaderComponent;