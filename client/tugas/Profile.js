import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { thisExpression } from '@babel/types';

export default class Profile extends Component {
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

    logoutController() {
        Alert.alert('Confirm', 'Logout Now?', [
            {text: 'Yes', onPress: ()=> {
                AsyncStorage.removeItem('token')
                alert('Loged Out!')
                this.props.navigation.navigate('LoginComponent')
            }},
            {text: 'No'}
        ])
    }
    render() {
        return(
            <View style={{justifyContent: 'space-between',flexDirection: 'row', flex: 1}}>
                <View
                style={{marginLeft: 15}} >
                    <Text>Hi, {this.state.username}!</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=> {this.logoutController()}}
                    style={{marginRight: 15, backgroundColor: '#aefbd9', padding: 5, borderRadius: 10}} >
                        <View>
                            <Text>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}