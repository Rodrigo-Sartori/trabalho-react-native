import estilo from "../estilo"
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { incluirCliente } from "../api/consumidor"
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"

export default function role(props) {
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [uf, setUF] = useState('')
    const semMascara = MaskService.toRawValue('cpf', cpf)


    const incluir = async () => {
        incluirCliente(semMascara, nome, uf.substring(0, 2))
        props.navigation.push("TelaInicial")
    }

    return (
        <View style={estilo.container} >
            <View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                <BotaoVoltar navigate={props.navigation} />
            </View>

            <View style={estilo.containerCadastro}>
                <View style={{ flexDirection: "row", marginTop: 3,alignSelf:"center",marginRight:13  }}>
                    <Text>Nome: </Text>
                    <TextInput value={nome} style={estilo.campoCadastroCliente} onChangeText={nome => setNome(nome)} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 20,alignSelf:"center"  }}>
                    <Text>Cpf: </Text>
                    <TextInputMask type={"cpf"} value={cpf} onChangeText={cpf => setCpf(cpf)} style={estilo.campoCadastroCliente} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 20,alignSelf:"center" }}>
                    <Text>UF: </Text>
                    <TextInput value={uf} onChangeText={uf => setUF(uf.toUpperCase())} style={estilo.campoCadastroCliente} maxLength={2} />
                </View>

                <View style={{ width: "50%", position: "absolute", bottom: "50%", alignSelf: "center" }}>
                    <Button onPress={incluir} title={"Concluir"} />
                </View>

            </View>

        </View>
    )

}
