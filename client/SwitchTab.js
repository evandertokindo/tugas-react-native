import React from 'react';
import { SwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './tugas/Login';
import Home from './tugas/Home';
import Register from './tugas/Register';

const Checker = SwitchNavigator({
    Home,
    Register,
    Login
}, {
    initialRouteName: 'Login'
})

export default createAppContainer(Checker);