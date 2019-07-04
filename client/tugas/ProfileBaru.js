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
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text>Hi,{this.state.username}</Text>

                <TouchableOpacity>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}