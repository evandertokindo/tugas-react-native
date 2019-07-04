import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import Address from '../Address';

const styles = StyleSheet.create({
    kotak : {
        backgroundColor: 'blue',
        color : 'white',
        width : 330,
        marginLeft : 10,
    }
})

export default class About extends Component {
    static navigationOptions = ()=> {
        return {
            title: 'Login',
            headerStyle : {
                backgroundColor : 'navy'
            },
            headerTintColor : '#fff'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    loginController() {
        fetch(`${Address.backEndAddress()}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            response.json().then(
                res => {
                    alert(res.message);
                    if(response.ok) {
                        AsyncStorage.setItem('token', res.token);
                        AsyncStorage.setItem('username', res.username);
                        this.props.navigation.navigate('ProfileComponent')
                    }
                }
            )
        })
    }


    render() {
        return(
            <View>
                <Text style={{fontSize: 15,marginLeft: 10,marginTop: 15}}>
                    Username :
                </Text>
                <TextInput 
                onChangeText={value => this.setState({email: value})}
                autoCapitalize='none'
                returnKeyType='next'
                placeholder='Masukkan Username Anda'
                placeholderTextColor='white'
                style={styles.kotak}
                onSubmitEditing={()=> {this.inputPassword.focus()}} />

                <Text style={{fontSize: 15,marginLeft: 10, marginTop: 15}}>
                    Password :
                </Text>
                <TextInput
                onChangeText={value => this.setState({password: value})}
                placeholder='Masukkan Password Anda'
                autoCapitalize='none'
                returnKeyType='none'
                placeholderTextColor='white'
                secureTextEntry
                returnKeyType='go'
                style={styles.kotak}
                ref={ref => this.inputPassword = ref}
                 />
                
                <View>
                    <TouchableOpacity 
                    style={{backgroundColor : 'green', marginBottom : 5, marginTop : 5, width: 100, marginLeft: 10, height: 20}}
                    onPress={()=> this.loginController}>
                        <Text style={{textAlign : 'center'}}> Login </Text> 
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Register')}
                    style={{backgroundColor : 'green', marginBottom : 5, marginTop : 5, width: 100, marginLeft: 10, height: 20 }} >  
                        <Text style={{textAlign : 'center'}}> Register </Text> 
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


    // componentDidMount() {
    //     this.getUser();
    // }

    // getUser() {
    //     fetch(`${Address.backEndAddress}/login`, {
    //         method: {
    //             Accept: 'application/json',
                
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(res => {
    //         alert(res)
    //     })
    // }