import estilo from "../estilo"
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Button, Modal, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { getClientes, deletarCliente } from "../api/consumidor";
import BotaoNavegar from "../componentes/botaoNavegar";
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"
import { branco, cinzaClaro, vermelho, azulBemClaro, preto } from "../constantes/coresEstaticas"

export default function listarClientes(props) {
    const [lista, setLista] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getClientes().then((dados) => { setLista(dados) })
    }, []);

    const navegarTelaCartao = (cartoes, nome) => {
        if (cartoes == undefined || cartoes.length == 0) {
            console.warn("fazer modal falando que nao tem cartao pra esse cliente")

        } else {
            props.navigation.push("TelaListaCartoes", { lista: cartoes, nomeCliente: nome })
        }
    }

    const fazExclusao = () => {
        deletarCliente(idCliente)
        setModalVisible(true)
        props.navigation.push("TelaInicial")
    }

    const chamaModal = (id) => {
        setModalVisible(true)
        setIdCliente(id)

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
                    <BotaoNavegar titulo={"cadastrar cliente"} navigate={props.navigation} nomeTela={"TelaCadastrarCliente"} cor={preto} estilo={estilo.botaoCadastro} />
                }
                ListHeaderComponent={<View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                    <BotaoVoltar navigate={props.navigation} />
                </View>}
                renderItem={({ item }) =>
                    <Fragment>
                        <View style={estilo.linha}>
                            <View style={estilo.containerCliente}>
                                <Text style={estilo.fonteListagem}>Nome: {item.nome}</Text>
                                <Text style={estilo.fonteListagem}>cpf: {item.cpf}</Text>
                                <Text style={estilo.fonteCartao} onPress={() => navegarTelaCartao(item.cartoes, item.nome)}>Cartões: {item.cartoes.length} </Text>
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
