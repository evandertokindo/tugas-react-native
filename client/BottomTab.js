import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeComponent from './tugas/Home';
import IsiBerita from './tugas/IsiBerita';
import ListArtikel from './tugas/ListArtikel';
import CategoryComponent from './tugas/Category';
import LoginComponent from './tugas/Login';
import RegisterComponent from './tugas/Register';
import AboutComponent from './tugas/AboutUs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const isLogin = false;

const HomeStack = createStackNavigator({
    HomeRoot : {
        screen : HomeComponent
    },
    IsiBerita: {
        screen : IsiBerita
    },
    Login : {
        screen : LoginComponent
    },
    About : {
        screen : AboutComponent
    }
})

const CategoryStack = createStackNavigator({
    CategoryRoot: {
        screen: CategoryComponent
    },
    ListArtikel: {
        screen: ListArtikel
    },
    IsiBerita: {
        screen : IsiBerita
    },
})

const LoginStack = createStackNavigator({
    LoginRoot : {
        screen : LoginComponent
    },
    Register : {
        screen : RegisterComponent
    },
})

const AboutStack = createStackNavigator({
    AboutRoot : {
        screen : AboutComponent
    }
})

const BottomTab = createBottomTabNavigator({
    HomeTab : {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: <Ionicons name="md-home" color="black" size={20} />
        }
    },
    CategoryTab: {
        screen: CategoryStack,
        navigationOptions: {
            tabBarLabel: 'Category',
            tabBarIcon: <Ionicons name='md-menu' color={'#000'} size={20} />
        }
    },
    LoginTab: {
        screen: LoginStack,
        navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: <Ionicons name='md-people' color={'#000'} size={20} />
        }
    },
    AboutTab : {
        screen: AboutStack,
        navigationOptions: {
            tabBarLabel: 'AboutUs',
            tabBarIcon: <AntDesign name='exclamation' color={'#000'} size={20} />
        }
    }

})

export default createAppContainer(BottomTab);