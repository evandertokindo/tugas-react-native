import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Address from '../Address';

export default class LoginBaru extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            check:''
        }
    }

    signUp() {
        const {password, check} = this.state;
        if (password !== check) {
            alert("Password Salah");
        } else {
            fetch(`${Address.backEndAddress}/register`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username : this.state.username,
                    password : this.state.password
                })
            })
            .then(res => {
                AsyncStorage.setItem('token', res.token);
                AsyncStorage.setItem('id', res.id)
                this.props.navigation.navigate('HomeStack')
            })
            .catch(err => {
                alert('Fetching Error.');
                console.log(err)
            })
        }
    }

    render() {
        return(
            <View>
                <TextInput
                    onChangeText={value => {this.state({username: value})}}
                    autoCapitalize='none'
                    returnKeyType='next'
                    placeholder='username'
                    value={this.state.username}
                    onSubmitEditing={()=> {this.inputPassword.focus()}}
                />

                <TextInput
                    onChangeText={value => {this.state({password: value})}}
                    autoCapitalize='none'
                    returnKeyType='go'
                    placeholder='password'
                    secureTextEntry
                    value={this.state.password}
                    ref={ref => this.inputPassword = ref}
                />

                <View
                style={{justifyContent: 'space-between', alignItems: 'center', flex: 1,flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={()=> this.signUp()}
                    >
                        <Text>Masuk</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Register')}
                    >
                        <Text>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}