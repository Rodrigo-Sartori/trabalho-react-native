import React, { useState, useEffect } from "react";
import estilo from "../estilo"
import { Alert, Button, StyleSheet, Text, View,useWindowDimensions  } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { validaAcesso } from "../api/consumidor"
import Constant from "expo-constants"

export default function getAcesso(props) {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [dados, setDados] = useState([])
    const semMascara = MaskService.toRawValue('cpf', cpf)



    const navegar = async() => {
        validaAcesso(semMascara, senha)
        props.navigation.push("TelaInicial")
    }

    return (
        <View style={estilo.containerCentralizado} >
            <View style={{ flexDirection: "row", top: "65%" }}>
                <Text>Cpf: </Text>
                <TextInputMask type={"cpf"} value={cpf} onChangeText={cpf => setCpf(cpf)} style={estilo.campoMascara} />
            </View>

            <View style={{ flexDirection: "row", top: "70%" }}>
                <Text>Senha: </Text>
                <TextInputMask type={"only-numbers"} value={senha} onChangeText={senha => setSenha(senha)} style={estilo.campoMascara} />
            </View>

            <View style={{top: useWindowDimensions().height-450 }}>
                <Button title="Entrar" onPress={navegar} />

            </View>

        </View>
    )

}