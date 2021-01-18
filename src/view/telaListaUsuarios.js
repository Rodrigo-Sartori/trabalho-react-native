import estilo from "../estilo"
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Button, Modal, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { deletarUsuario, recuperaTodosUsuarios } from "../api/consumidor";
import BotaoNavegar from "../componentes/botaoNavegar";
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"
import { branco, cinzaClaro, vermelho, azulBemClaro, preto } from "../constantes/coresEstaticas"

export default function listarUsuarios(props) {
    const [lista, setLista] = useState([])
    const [idUsuario, setIdUsuario] = useState('')
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        recuperaTodosUsuarios().then((dados) => { setLista(dados) })
    }, []);

    const navegarTelaCartao = (cartoes, nome) => {
        if (cartoes == undefined || cartoes.length == 0) {
            setModalCartao(true)
        } else {
            props.navigation.push("TelaListaCartoes", { lista: cartoes, nomeCliente: nome })
        }
    }

    const fazExclusao = () => {
        deletarUsuario(idUsuario)
        setModalVisible(false)
        props.navigation.push("TelaInicial")
    }

    const chamaModal = (id) => {
        setModalVisible(true)
        setIdUsuario(id)
    }

    return (
        <View style={estilo.container}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={estilo.modal}>
                    <Text> não seja abestado, nao exclua vai dar erro</Text>
                    <View style={estilo.botaoEsquerdaModal}>
                        <Button title={"sim"} onPress={() => fazExclusao()} color={azulBemClaro} />
                    </View>
                    <View style={estilo.botaoDireitaModal}>
                        <Button title={"não"} onPress={() => setModalVisible(false)} color={vermelho} />
                    </View>
                </View>
            </Modal>


            <FlatList
                data={lista}
                ListFooterComponent={
                    <BotaoNavegar titulo={"cadastrar usuário"} navigate={props.navigation} nomeTela={"TelaCadastroUsuario"} cor={preto} estilo={estilo.botaoCadastro} />
                }
                ListHeaderComponent={<View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                    <BotaoVoltar navigate={props.navigation} />
                </View>}
                renderItem={({ item }) =>
                    <Fragment>
                        <View style={estilo.linha}>
                            <View style={estilo.containerCliente}>
                                <Text style={estilo.fonteListagem}>ID: {item.id}</Text>
                                <Text style={estilo.fonteListagem}>Nome: {item.nome}</Text>
                                <Text style={estilo.fonteListagem}>Cpf: {item.cpf}</Text>
                                <Text style={estilo.fonteListagem}>Regra: {item.regras == undefined || item.regras.length == 0 ? "Usuário sem regra" : item.regras[0].nome}</Text>
                            </View>
                            <View style={estilo.botaoDetalhe} >
                                <Button title={"excluir"} onPress={() => chamaModal(item.id)} color={cinzaClaro} />
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: 'black', margin: 10, }} />
                    </Fragment>
                }
            />
        </View>

    )
}
