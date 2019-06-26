import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Address from '../Address';

export default class Home extends Component {
    static navigationOptions = ()=> {
        return {
            title: 'Home',
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
        this.getData();
    //     console.warn(this.props.navigation.params)
    //     if(this.props.navigation.params) {
    //         if(this.props.navigation.params.idKategori === null) {
    //             this.getAllArticle();
    //         } else {
    //             this.getArticleByCategory(this.props.navigation.params.idKategori);
    //         }    
    //     } else {
    //         this.getAllArticle();
    //     }
    //     this.getAllArticle();
     }

     checkAuth() {
         
     }

     getData() {
        fetch(`${Address.backEndAddress}/panggil`)
        .then(response => response.json())
        .then(res => {
            this.setState({data: res})
        })
     }

    // getAllArticle() {
    //     fetch(`${Address.backEndAddress}/panggil`)
    //     .then(response => response.json())
    //     .then(res => {
    //         this.setState({data: res})
    //     })
    // }

    // getArticleByCategory(id) {
    //     fetch(`${Address.backEndAddress}/panggil/${id}`)
    //     .then(response => response.json())
    //     .then(res => {this.setState({data: res})})
    // }

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
                            <Text style={{flex: 1, flexWrap: 'wrap', fontFamily: 'Times New Roman', fontWeight : 'bold', color: 'black'}}>{item.judulArtikel}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        )
    }
}