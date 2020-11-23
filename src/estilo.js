import { StyleSheet,useWindowDimensions } from "react-native";
import { color } from "react-native-reanimated";
import {azulClaro,branco,azulEscuro,preto} from "../src/constantes/coresEstaticas"

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: azulClaro
    }, containerCentralizado: {
        flex: 1,
        backgroundColor: azulClaro,
        alignItems: 'center',
    },
    containerCliente: {
        marginLeft: "3%",
        marginTop: "10%",
        width: "70%",
    },
    campoMascara: {
        borderRadius: 3,
        borderWidth: 1,
        width: "30%",
        height:35
    },
    campoCadastroCliente: {
        borderRadius: 3,
        borderWidth: 1,
        width: "30%",
        height:35,
        backgroundColor:branco
    }, botaoCadastro: {
        borderRadius: 3,
        marginBottom :"3%",
        textDecorationColor:branco,
        width:"50%",
        alignSelf:"center",


    }, botaoDetalhe: {
        width: "25%",
        marginTop: "13%",
        height: "3%",
        position:"absolute",
        right:5,
        fontSize: 10,
    }, linha: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    fonteListagem: {
        fontSize: 17,
        color:branco
    },
    containerDetalhe: {
        marginLeft: "3%",
        marginTop: "10%",
        width: "100%",
        height: "50%",
        backgroundColor: branco,
    },
    containerCadastro: {
        marginLeft: "3%",
        marginTop: "10%",
        width: "90%",
        height: "85%",
        backgroundColor: azulClaro,
    },
    modal: {
        marginTop:"50%",
        borderWidth:2,
        borderRadius:20,
        alignSelf:"center",
        width: "70%",
        height: "40%",
        backgroundColor: branco,
    },
    botaoEsquerdaModal: {
        position:"absolute",
        left:0,
        bottom:0,
        marginBottom:"5%",
        marginLeft:"5%",
        width:"30%"
    },
    
    botaoDireitaModal: {
        position:"absolute",
        right:0,
        bottom:0,
        marginBottom:"5%",
        marginRight:"5%",
        width:"30%"
    },
    fonteCartao: {
        fontSize: 20,
        textDecorationLine:"underline",
        color:azulEscuro
    },

});
export default estilo


