import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import BotaoNavegar from "../componentes/botaoNavegar";
import estilo from "../estilo"

export default function Inicio(props) {


    return (
        <View style={estilo.container} >
            <View style={{ alignItems: 'center',height:"100%"}}>
                <View style={{ top:"40%"}}>
                    <BotaoNavegar titulo={"listar clientes"} navigate={props.navigation} nomeTela={"TelaListaClientes"} />
                </View>

                <View style={{top:"45%"}}>
                    <Button title="listar usuários"/>
                </View>
            </View>

        </View>
    )

}