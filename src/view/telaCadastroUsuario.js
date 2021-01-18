import estilo from "../estilo"
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { incluirUsuario } from "../api/consumidor"
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"
import { Picker } from "@react-native-community/picker";
import { branco } from "../constantes/coresEstaticas";

export default function role(props) {
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [itemSelecionado, setItemSelecionado] = useState("ROLE_EXCLUSAO")
    const semMascara = MaskService.toRawValue('cpf', cpf)


    const incluir = async () => {
        incluirUsuario(semMascara, nome, [itemSelecionado])
        props.navigation.push("TelaInicial")
    }

    return (
        <View style={estilo.container} >
            <View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                <BotaoVoltar navigate={props.navigation} />
            </View>

            <View style={estilo.containerCadastro}>
                <View style={{ flexDirection: "row", marginTop: 3, alignSelf: "center", }}>
                    <Text>Nome: </Text>
                    <TextInput value={nome} style={estilo.campoMascara} onChangeText={nome => setNome(nome)} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, alignSelf: "center", }}>
                    <Text>Cpf: </Text>
                    <TextInputMask type={"cpf"} value={cpf} onChangeText={cpf => setCpf(cpf)} style={estilo.campoMascara} />
                </View>
                <View style={{ flexDirection: "row"  ,alignSelf: "center", marginTop: 20 }}>
                <Text style={{marginTop:20}}>Permissão: </Text>
                    <View style={{ backgroundColor: branco, width: 130, height: 50}}>
                        <Picker
                            selectedValue={itemSelecionado}
                            style={{ height: 50, width: 130, alignSelf: "center" }}
                            onValueChange={(itemValue, itemIndex) => setItemSelecionado(itemValue)}>
                            <Picker.Item label="Administrador" value="ROLE_ADM_USUARIO" />
                            <Picker.Item label="Usuário" value="ROLE_EXCLUSAO" />
                        </Picker>
                    </View>
                </View>

                <View style={{ width: "50%", position: "absolute", bottom: "50%", alignSelf: "center" }}>
                    <Button onPress={incluir} title={"Concluir"} />
                </View>

            </View>

        </View>
    )

}
