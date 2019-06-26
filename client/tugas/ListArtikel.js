import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Address from '../Address';

export default class Home extends Component {
    static navigationOptions = ({navigation})=> {
        return {
            // title: `${this.props.navigation.state.params.namaKategori !== undefined ? this.props.navigation.state.params.namaKategori : 'Default'}`,
            title: `${navigation.state.params.namaKategori}`,
            headerStyle : {
                backgroundColor : 'navy'
            },
            headerTintColor : '#fff'
        }
    }

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getDataArtikel(this.props.navigation.state.params.idKategori);
     }

     getDataArtikel(id) {
        fetch(`${Address.backEndAddress}/panggil/${id}`)
        .then(response => response.json())
        .then(res => {
            this.setState({data: res});
        })
     }

    resizeImageKeepAspectRatio = (event, index) => {
        let widthScreen = Dimensions.get('window').width
        let widthOrigin = event.nativeEvent.source.width
        let heightOrigin = event.nativeEvent.source.height
        let aspectRatio = widthOrigin / heightOrigin
        var items = this.state.feeds
        items[index].post.width = widthScreen
        items[index].post.height = widthScreen / aspectRatio
        this.setState({
            images : items
        })
    }

    render() {
        return(
            <ScrollView> 
                {this.state.data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={()=> this.props.navigation.push('IsiBerita', this.state.data[index])}
                    >
                        <View style={{flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center'}}>
                            <Image source={{uri: `${Address.backEndAddress}/image/${item.heroImage}`}} style={{width: 80, height : 95, borderRadius : 10, margin: 10}} />
                            <Text style={{flex: 1, flexWrap: 'wrap', fontFamily: 'Times New Roman', fontWeight : 'bold'}}>{item.judulArtikel}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    }
}