import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, TouchableOpacity} from 'react-native';

export default class ProfileBaru extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('username')
        .then(response => {
            this.setState({username: response})
        })
    }

    logoutHandler() {
        Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin logout?', [
          {text: 'Ya', onPress: ()=> {
            AsyncStorage.removeItem('token')
            alert('Logout Berhasil.')
            this.props.navigation.navigate('LoginComponent')    
          }},
          {text: 'Tidak'}
        ])
      }

    render() {
        return(
            <View>
                <View style={{alignItems: 'center', width: '90%'}} >
                    <Text style={{textAlign: 'center' }}>Hi!</Text>

                    <TouchableOpacity style={{backgroundColor: 'red', width: '30%', marginTop: 10 }} onPress={()=> this.logoutHandler()}>
                        <Text style={{color: 'white', textAlign: 'center' }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}