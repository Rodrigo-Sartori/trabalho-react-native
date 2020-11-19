import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './telaLogin';
import Home from './telaInicial'

const Stack = createStackNavigator()

export default function gerenciamentoStack() {

    return (
        <Stack.Navigator initialRouteName="TelaLogin" options={{ title: "Sistema de Cartão" }}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaLogin" component={Login}/>
            <Stack.Screen name="TelaInicial" component={Home}/>
            

        </Stack.Navigator>
    )

}