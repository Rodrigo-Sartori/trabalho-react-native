import React, { useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { } from "./api/consumidor";
import BotaoVoltar from "./componentes/botaoVoltar";
export default function Inicio(props) {
    const token = props.route.params.token

    
    return (
        <View style={styles.container} >
          <BotaoVoltar/>
            <View style={{ position: "absolute", bottom: "50%" }}>
                <Button title="listar clientes" onPress = {()=>{console.log(token)}}/>
            </View>

            <View style={{ position: "absolute", bottom: "40%"}}>
                <Button title="listar usuários"/>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed',
        alignItems: 'center',
    },
});
