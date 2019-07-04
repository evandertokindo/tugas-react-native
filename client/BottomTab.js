import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeComponent from './tugas/Home';
import IsiBerita from './tugas/IsiBerita';
import ListArtikel from './tugas/ListArtikel';
import CategoryComponent from './tugas/Category';
import LoginComponent from './tugas/LoginBaru';
import RegisterComponent from './tugas/RegisterBaru';
import AboutComponent from './tugas/AboutUs';
import LoadingComponent from './tugas/LoadingBaru';
import ProfileComponent from './tugas/ProfileBaru';
import AntDesign from 'react-native-vector-icons/AntDesign';

const isLogin = false;

const HomeStack = createStackNavigator({
    HomeRoot : {
        screen : HomeComponent
    },
    IsiBerita: {
        screen : IsiBerita
    },
    About : {
        screen : AboutComponent
    }
})

const ProfileStack = createStackNavigator({
    ProfileRoot : {
        screen : ProfileComponent
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

const AboutStack = createStackNavigator({
    AboutRoot : {
        screen : AboutComponent
    }
})

const LoginStack = createStackNavigator({
    LoginRoot : {
        screen : LoginComponent
    },
    Register : {
        screen : RegisterComponent
    },
})

const SwitchAcc = createSwitchNavigator({
    LoadingScreen : {
        screen: LoadingComponent
    },
    LoginComponent : {
        screen: LoginStack
    },
    ProfileComponent : {
        screen : ProfileStack
    }
}, {
    initialRouteName : 'LoadingScreen'
})

SwitchAcc.navigationOptions = ({navigation})=> {
    let tabBarVisible = false;
    if (navigation.state.index > 1) {tabBarVisible = true}
    return {tabBarVisible};
}

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
    
    AboutTab : {
        screen: AboutStack,
        navigationOptions: {
            tabBarLabel: 'AboutUs',
            tabBarIcon: <AntDesign name='exclamation' color={'#000'} size={20} />
        }
    },
    ProfileTab : {
        screen: SwitchAcc,
        navigationOptions : {
            tabBarLabel: 'Profile',
            tabBarIcon: <Ionicons name="ios-body" color={'#000'} size={20} />
        }
    }
})

export default createAppContainer(BottomTab);