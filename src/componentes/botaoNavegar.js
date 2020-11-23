import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function navegar(props) {

    return (
        <View style={props.estilo} >
                <Button title={props.titulo} onPress={()=>props.navigate.navigate(props.nomeTela,{param:props.param})} color ={props.cor} />
        </View>
    )
}