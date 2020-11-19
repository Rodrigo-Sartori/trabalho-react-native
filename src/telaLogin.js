import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { TextInputMask, MaskService } from "react-native-masked-text"
import { validaAcesso } from "./api/consumidor"

export default function getAcesso(props) {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [dados, setDados] = useState([])
    const semMascara = MaskService.toRawValue('cpf', cpf)


    const navegar = async() => {
        const token = await validaAcesso(semMascara, senha)
        console.log(token)
        props.navigation.push("TelaInicial", { token: token })
    }

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row", position: "absolute", bottom: "50%" }}>
                <Text>Cpf:</Text>
                <TextInputMask type={"cpf"} value={cpf} onChangeText={cpf => setCpf(cpf)} style={{ borderWidth: "1px", borderRadius: "3px" }} />
            </View>

            <View style={{ flexDirection: "row", position: "absolute", bottom: "45%" }}>
                <Text>Senha:</Text>
                <TextInputMask type={"only-numbers"} value={senha} onChangeText={senha => setSenha(senha)} style={{ borderWidth: "1px", borderRadius: "3px" }} />
            </View>

            <View style={{ position: "absolute", bottom: "35%" }}>
                <Button title="Entrar" onPress={navegar} />

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
