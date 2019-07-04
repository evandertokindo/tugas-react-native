import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';

export default class Profile extends Component {

    componentDidMount() {
        console.log(`Loading Loaded`);
        AsyncStorage.getItem('token')
        .then(response => {
            if(response === null) {
                this.props.navigation.navigate('LoginComponent')
            } else {
                this.props.navigation.navigate('ProfileComponent')
            }
        })
    }
    render() {
        return(
            <View style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#BBBBBB'}}>
                <View>
                    <Text style={{marginBottom: 10, textAlign: 'center', color: 'black'}} >Loading..?</Text>
                    <ActivityIndicator />
                </View>
            </View>
        )
    }
}