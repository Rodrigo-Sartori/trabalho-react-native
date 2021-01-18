import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import BotaoNavegar from "../componentes/botaoNavegar";
import estilo from "../estilo"
import { buscaUsuarioCpf } from "../api/consumidor"


export default function Inicio(props) {

    const [permissao, setPermissao] = useState([])

    useEffect(() => {
        getPermissao()
    }, [])

    const getPermissao = async () => {
        const cpf = (await AsyncStorage.getItem("documento")).toString()
        buscaUsuarioCpf(cpf).then((dados) => setPermissao(dados)).catch(error => props.navigation.push("TelaErro"))
    }

    const isPermissaoValida = () => {
        if (permissao == "ROLE_ADM_USUARIO") {
            return (
                <BotaoNavegar titulo={"listar usuários"} navigate={props.navigation} nomeTela={"TelaListaUsuarios"} />
            )
        }
    }

    return (
        <View style={estilo.container} >
            <View style={{ alignItems: 'center', height: "100%" }}>
                <View style={{ top: "40%" }}>
                    <BotaoNavegar titulo={"listar clientes"} navigate={props.navigation} nomeTela={"TelaListaClientes"} />
                </View>
                <View style={{ top: "45%" }}>
                    {isPermissaoValida()}
                </View>

            </View>

        </View>
    )

}