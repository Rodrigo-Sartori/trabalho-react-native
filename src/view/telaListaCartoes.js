import estilo from "../estilo"
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Modal, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { deletarCartao } from "../api/consumidor";
import BotaoNavegar from "../componentes/botaoNavegar";
import BotaoVoltar from "../componentes/botaoVoltar";
import Constant from "expo-constants"
import { branco, cinzaClaro, vermelho, azulBemClaro, preto } from "../constantes/coresEstaticas"

export default function listarCartoes(props) {
    const cartoes = props.route.params.lista
    const nomeCliente = props.route.params.nomeCliente
    const [idCartao, setIdCartao] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const navegarTelaCartao = (cartoes) => {
        if (cartoes == undefined || cartoes.length == 0) {
            console.warn("fazer modal falando que nao tem cartao pra esse cliente")

        } else {

        }
    }

    const fazExclusao = () => {
        deletarCartao(idCartao)
        setModalVisible(false)
        props.navigation.push("TelaInicial")
    }

    const chamaModal = (id) => {
        setModalVisible(true)
        setIdCartao(id)
    }

    const formataStatus = (status) => {
        returnstatus
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
                ListFooterComponent={
                    <BotaoNavegar titulo={"pedir cartão"} navigate={props.navigation} nomeTela={"TelaCadastrarCliente"} cor={preto} estilo={estilo.botaoCadastro} />
                }
                ListHeaderComponent={<View style={{ marginTop: Constant.statusBarHeight, height: 30 }}>
                    <BotaoVoltar navigate={props.navigation} />
                    <Text style={{alignSelf:"center",marginTop:"3%"}}>cartões de: {nomeCliente}</Text>
                </View>}
                data={cartoes}
                renderItem={({ item }) =>
                    <Fragment>
                        <View style={estilo.linha}>
                            <View style={estilo.containerCliente}>
                                <Text style={estilo.fonteListagem}>Número: {item.numero}</Text>
                                <Text style={estilo.fonteListagem}>Data Validade: {item.dataValidade.substring(0, 10)}</Text>
                                <Text style={estilo.fonteListagem}>Status: {item.bloqueado == true ? "Bloqueado" : "Ativo"}</Text>

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
