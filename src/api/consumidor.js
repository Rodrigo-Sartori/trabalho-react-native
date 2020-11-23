import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const validaAcesso = async (cpf, senha) => {
    const resposta = await fetch('http://192.168.15.89:8080/auth', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cpf: cpf,
            senha: senha
        })
    })
    if (!resposta.ok) {
        console.log("erro no login status: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
        await AsyncStorage.setItem("token_JWT", jsonResposta.dados.token)
    }
}

export const getClientes = async () => {

    const resposta = await fetch('http://192.168.15.89:8080/api/cliente/clientes', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        }
    })
    if (!resposta.ok) {
        console.log("erro no login status: " + resposta.status)
    } else {
        try {
            const listaClientes = await resposta.json()
            return listaClientes.dados
        }
        catch (error) {
            console.log(error)
        }

    }
} 

export const incluirCliente = async (cpf, nome,uf) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/cliente/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cpf: cpf,
            nome: nome,
            uf:uf
        })
    })
    if (!resposta.ok) {
        console.warn("erro no login status: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
       console.warn(jsonResposta.dados);
    }
}

export const deletarCliente = async (id) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/cliente/deletar', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        },
        body: JSON.stringify({
            mensagem: id
        })
    })
    if (!resposta.ok) {
        console.warn("erro no login status: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
       console.warn(jsonResposta.dados);
    }
}