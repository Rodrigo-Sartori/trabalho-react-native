import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function getAcesso(props) {

    function voltar(){
        props.navigation.goBack()
    }

    return (
        <View style={styles.botao} >
                <Button title="Voltar" onPress={voltar} color ="#a9a9a9"/>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        position:"absolute",
        top :5,
        left:5,
        borderRadius :"3px",
    },
});
