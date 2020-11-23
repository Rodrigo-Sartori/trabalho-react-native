import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './view/telaLogin';
import Home from './view/telaInicial';
import TelaListaClientes from "./view/telaListaClientes";
import TelaCadastrarCliente from "./view/telaCadastroCliente";
import TelaDetalheCliente from "./view/telaDetalheCliente";
import TelaListaCartoes from "./view/telaListaCartoes";
import TelaCadastroCartao from "./view/telaCadastroCartao";



const Stack = createStackNavigator()

export default function gerenciamentoStack() {

    return (
        <Stack.Navigator initialRouteName="TelaLogin"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaLogin" component={Login} />
            <Stack.Screen name="TelaInicial" component={Home} />
            <Stack.Screen name="TelaListaClientes" component={TelaListaClientes} />
            <Stack.Screen name="TelaCadastrarCliente" component={TelaCadastrarCliente} />
            <Stack.Screen name="TelaDetalheCliente" component={TelaDetalheCliente} />
            <Stack.Screen name="TelaListaCartoes" component={TelaListaCartoes} />
            <Stack.Screen name="TelaCadastroCartao" component={TelaCadastroCartao} />
        </Stack.Navigator>
    )

}