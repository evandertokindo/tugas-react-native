import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import RumahKomponen from './contoh/Rumah';
import SpesifikasiKomponen from './contoh/Spesifikasi';
import LoginKomponen from './contoh/Login';

const RumahStack = createStackNavigator({
    RumahRoot : {
        screen : RumahKomponen
    },
    Spesifikasi : {
        screen : SpesifikasiKomponen
    },
    Login : {
        screen : LoginKomponen
    }
})

const SpesifikasiStack = createStackNavigator({
    SpesifikasiRoot : {
        screen : SpesifikasiKomponen
    }
})

const LoginStack = createStackNavigator({
    LoginRoot : {
        screen : LoginKomponen
    }
})

const BottomTab = createBottomTabNavigator({
    RumahTab : {
        screen : RumahStack,
        navigationOptions : {
            tabBarLabel : 'Home',
            tabBarIcon : ({tintColor})=> (
                <IonIcons name='md-home' color={tintColor} size={28} />
            )
        }
    },
    SpesifikasiTab : {
        screen : SpesifikasiStack,
        navigationOptions : {
            tabBarLabel : 'Setting',
            tabBarIcon : ({tintColor})=> (
                <IonIcons name='md-cog' color={tintColor} size={28} />
            )
        }
    },
    LoginTab : {
        screen : LoginStack,
        navigationOptions : {
            tabBarLabel : 'Login',
            tabBarIcon : ({tintColor})=> (
                <IonIcons name='md-person' color={tintColor} size={28} />
            )
        }
    }
})

export default createAppContainer(BottomTab);