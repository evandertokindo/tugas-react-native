import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, AsyncStorage, Text, StyleSheet } from 'react-native';
import Address from '../Address';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },

    inputan : {
        width: '95%',
        padding : 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        marginBottom: 10
    },

    tombollogin: {
        width: '95%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
    },

    tomboldaftar: {
        width: '95%',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 50,
    },

    tulisan: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginBottom: 20,
    }
})

export default class LoginBaru extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            check:''
        }
    }

    login() {
        fetch(`${Address.backEndAddress}/login`, {
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
            this.props.navigation.navigate('ProfileComponent')
        })
        .catch(err => {
            alert('Fetching Error.');
            console.log(err)
        })
    }

    // signUp() {
    //     const {password, check} = this.state;
    //     if (password !== check) {
    //         alert("Password Salah");
    //     } else {
    //         fetch(`${Address.backEndAddress}/register`, {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 username : this.state.username,
    //                 password : this.state.password
    //             })
    //         })
    //         .then(res => {
    //             AsyncStorage.setItem('token', res.token);
    //             AsyncStorage.setItem('id', res.id)
    //             this.props.navigation.navigate('HomeStack')
    //         })
    //         .catch(err => {
    //             alert('Fetching Error.');
    //             console.log(err)
    //         })
    //     }
    // }

    render() {
        return(
            <View >
                <View style={styles.container} >
                    <Text style={styles.tulisan} >Login Form</Text>
                    <TextInput
                        style={styles.inputan}
                        onChangeText={value => {this.setState({username: value})}}
                        autoCapitalize='none'
                        returnKeyType='next'
                        placeholder='username'
                        value={this.state.username}
                        onSubmitEditing={()=> {this.inputPassword.focus()}}
                    />

                    <TextInput
                        style={styles.inputan}
                        onChangeText={value => {this.setState({password: value})}}
                        autoCapitalize='none'
                        returnKeyType='go'
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password}
                        ref={ref => this.inputPassword = ref}
                    />

                    
                    <TouchableOpacity
                        style={styles.tombollogin}
                        onPress={()=> this.login()}
                    >
                        <Text style={{textAlign: 'center', color: 'white'}} >Masuk</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.tomboldaftar}
                        onPress={()=> this.props.navigation.navigate('Register')}
                    >
                        <Text style={{textAlign: 'center', color: 'white'}} >Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}