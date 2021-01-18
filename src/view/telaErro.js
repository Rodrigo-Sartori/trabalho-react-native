import React, { useState, useEffect } from "react";
import estilo from "../estilo"
import { Alert, Button, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { validaAcesso } from "../api/consumidor"
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function getAcesso(props) {
    return (
        <View style={estilo.containerCentralizado} >
            

            <View style={{ justifyContent:"center",marginTop:"15%" }}>
                <Text>Ocorreu um erro no sistema</Text>
            </View>

            <View style={{ top: useWindowDimensions().height - 450 }}>
                <Button title="voltar" onPress={()=>props.navigation.goBack()} />
            </View>

        </View>
    )

}