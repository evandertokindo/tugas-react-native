import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
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

        componentDidMount() {
            this.getUser();
        }
    
        getUser() {
            fetch(`${Address.backEndAddress}/register`, {
                method: {
                    Accept: 'application/json',
                    
                }
            })
            .then(response => response.json())
            .then(res => {
                alert(res)
            })
        }
    
    render() {
        return(
            <View>
                <Text>
                    Nama :
                </Text>
                <TextInput placeholder='Masukkan Nama Lengkap Anda' placeholderTextColor='white' style={styles.kotak} />

                <Text>
                    Email :
                </Text>
                <TextInput placeholder='Masukkan Email Anda' placeholderTextColor='white' style={styles.kotak} />

                <Text>
                    Password :
                </Text>
                <TextInput placeholder='Masukkan Password Anda' placeholderTextColor='white' style={styles.kotak} />

                <TouchableOpacity style={{backgroundColor : 'green', marginTop : 10, marginLeft : 120, width : 100, }} onPress={()=> this.props.navigation.push('Home')}> 
                    
                    <Text style={{textAlign : 'center'}}> Daftar </Text> 
                
                </TouchableOpacity> 
            </View>
        )
    }
}
