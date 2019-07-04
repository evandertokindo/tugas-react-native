import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
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
    static navigationOptions = ({navigation})=> {
        return {
            title : 'Register',
            headerStyle : {
                backgroundColor : 'purple'
            },
            headerTintColor : '#fff'
        }
    }

    constructor(props) {
        super(props);
       this.state = {
            username:'',
            password:'',
        }
    }

    registerController() {
        fetch(`${Address.backEndAddress()}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => {
            console.log(response);
            if(response.ok) {
                Alert.alert('Anda berhasil membuat akun.')
                this.setState({
                    username: '',
                    password: '',
                })
                this.props.navigation.goBack();
            }
        })
    }

        
    
    render() {
        return(
            <View>

                <Text>
                    Username :
                </Text>
                <TextInput
                onChangeText={value => this.setState({username: value})}
                placeholder='Masukkan Email Anda'
                autoCapitalize='none'
                placeholderTextColor='white'
                returnKeyType='next'
                style={styles.kotak}
                onSubmitEditing={()=> {this.inputPassword.focus()}}
                />

                <Text>
                    Password :
                </Text>
                <TextInput
                onChangeText={value => this.setState({password: value})}
                placeholder='Masukkan Password Anda'
                autoCapitalize='none'
                returnKeyType='go'
                secureTextEntry
                placeholderTextColor='white'
                style={styles.kotak} 
                ref={ref => this.inputPassword = ref}
                onSubmitEditing={()=> {this.registerController()}}
                />

                <TouchableOpacity
                style={{backgroundColor : 'green', marginTop : 10, marginLeft : 120, width : 100, }}
                onPress={()=> this.props.navigation.goBack()}> 
                    
                    <Text style={{textAlign : 'center'}}> Masuk </Text> 
                
                </TouchableOpacity> 
            </View>
        )
    }
}


// componentDidMount() {
//     this.getUser();
// }

// getUser() {
//     fetch(`${Address.backEndAddress}/register`, {
//         method: {
//             Accept: 'application/json',
            
//         }
//     })
//     .then(response => response.json())
//     .then(res => {
//         alert(res)
//     })
// }