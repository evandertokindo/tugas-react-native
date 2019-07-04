import React, { Component } from 'react';
import { View, Text , AsyncStorage} from 'react-native';

export default class LoadingBaru extends Component {

    componentDidMount() {
        AsyncStorage.getItem('token')
        .then(response => {
            if(response === null) {
                this.props.navigation.navigate('LoginStack')
            } else {
                this.props.navigation.navigate('ProfileStack')
            }
        })
    }

    render() {
        return(
            <View>
                <Text>Load...</Text>
            </View>
        )
    }
}