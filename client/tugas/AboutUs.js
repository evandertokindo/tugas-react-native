import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import Address from '../Address';

export default class About extends Component {
    static navigationOptions = ()=> {
        return {
            title: 'About Us',
            headerStyle : {
                backgroundColor : 'navy'
            },
            headerTintColor : '#fff'
        }
    }

    constructor(props){
        super(props)
        
        this.state = {
            kelompok: []

        }
    }

    componentDidMount() {
        this.getKelompok();
    }

    getKelompok() {
        fetch(`${Address.backEndAddress}/daftarAnggota`)
        .then(respone => respone.json())
        .then(res => {
            this.setState({kelompok: res})
        })
    }

    render() {
        return(
            <ScrollView> 
            {this.state.kelompok.map((item, index) => (
                <View key={index}>
                    <View style={{flexDirection: 'row', flex: 1, marginTop: 10, justifyContent: 'space-between', borderBottomWidth: 1,}}>
                        <Text style={{marginLeft : 10}}>{item.namaAnggota}</Text>
                        <Text style={{marginRight : 10}}>{item.nim}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
        )
    }
}
