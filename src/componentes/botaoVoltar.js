import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function voltar(props) {

    return (
        <View style={styles.botao} >
                <Button title="Voltar" onPress={()=>props.navigate.goBack()} color ="#a9a9a9"/>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        position:"absolute",
        top :5,
        left:5,
        borderRadius :3,
    },
});
