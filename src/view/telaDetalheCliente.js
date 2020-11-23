import estilo from "../estilo"
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { validaAcesso } from "../api/consumidor"
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"

export default function role(props) {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const cliente = props.route.params.param
    const semMascara = MaskService.toRawValue('cpf', cpf)


    const navegar = async () => {
        validaAcesso(semMascara, senha)
        props.navigation.push("TelaInicial")
    }

    return (
        <View style={estilo.container} >
            <View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                <BotaoVoltar navigate={props.navigation} />
            </View>

            <View style={estilo.containerDetalhe}>
                <View style={{ flexDirection: "row", marginTop: 3 }}>
                    <Text>Nome: </Text>
                    <TextInput value={cliente.nome} style={estilo.campoMascara} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text>Cpf: </Text>
                    <TextInputMask type={"cpf"} value={cliente.cpf} onChangeText={cpf => setCpf(cpf)} style={estilo.campoMascara} />
                </View>

            </View>

        </View>
    )

}
