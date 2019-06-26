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
    static navigationOptions = ()=> {
        return {
            title: 'Login',
            headerStyle : {
                backgroundColor : 'navy'
            },
            headerTintColor : '#fff'
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        fetch(`${Address.backEndAddress}/login`, {
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
                <Text style={{fontSize: 15,marginLeft: 10,marginTop: 15}}>
                    Email :
                </Text>
                <TextInput placeholder='Masukkan Email Anda' placeholderTextColor='white' style={styles.kotak} />

                <Text style={{fontSize: 15,marginLeft: 10, marginTop: 15}}>
                    Password :
                </Text>
                <TextInput placeholder='Masukkan Password Anda' placeholderTextColor='white' style={styles.kotak} />
                
                <View>
                    <TouchableOpacity style={{backgroundColor : 'green', marginBottom : 5, marginTop : 5, width: 100, marginLeft: 10, height: 20}} onPress={()=> this.props.navigation.navigate('HomeRoot')}>
                        <Text style={{textAlign : 'center'}}> Login </Text> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')} style={{backgroundColor : 'green', marginBottom : 5, marginTop : 5, width: 100, marginLeft: 10, height: 20 }} >  
                        <Text style={{textAlign : 'center'}}> Register </Text> 
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
