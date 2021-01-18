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
    }).catch((error)=>{ throw error})
    if (!resposta.ok) {
        console.log("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
        await AsyncStorage.setItem("token_JWT", jsonResposta.dados.token)
    }
}

export const buscaUsuarioCpf = async (cpf) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/usuario/buscar', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString()
        },
        body: JSON.stringify({
            mensagem: cpf
        })
    })
    if (!resposta.ok) {
        console.log("erro na chamada " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
        return await jsonResposta.dados.regras[0].nome
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
        console.log("erro na chamada: " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
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

export const incluirCliente = async (cpf, nome, uf) => {
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
            uf: uf
        })
    })
    if (!resposta.ok) {
        console.log("erro na chamada: " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
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
        console.log("erro na chamada: " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
    }
}

export const deletarCartao = async (id) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/cartao/excluir/' + id, {
        method: 'DELETE',
        headers: {
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        }
    })
    if (!resposta.ok) {
        console.log("erro na chamada: " + resposta.status)
        throw  new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
    }
}


export const recuperaTodosUsuarios = async () => {
    const resposta = await fetch('http://192.168.15.89:8080/api/usuario/todos', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString()
        }
    })
    if (!resposta.ok) {
        console.log("erro na chamada " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        try {
            const listaClientes = await resposta.json()
            return listaClientes.dados
        } catch (error) {
            console.log(error)
        }
    }
}


export const deletarUsuario = async (id) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/usuario/deletar/' + id, {
        method: 'DELETE',
        headers: {
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        }
    })
    if (!resposta.ok) {
        console.log("erro na deleção de usuario  status: " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
    }
}

export const incluirUsuario = async (cpf, nome, regra) => {
    const resposta = await fetch('http://192.168.15.89:8080/api/usuario/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": (await AsyncStorage.getItem("token_JWT")).toString(),
            "Accept": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            ativo: "true",
            cpf: cpf,
            regras: regra
        })
    })
    if (!resposta.ok) {
        console.log("erro no login status: " + resposta.status)
        throw new Error("erro na chamada: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
    }
}
