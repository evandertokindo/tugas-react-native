import React, { Component } from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Address from '../Address';

const styles = StyleSheet.create({
    tulisanArtikel: {
        marginTop: 20,
        fontFamily: 'Sans Serif',
        textAlign : 'justify',
        fontSize: 12,
        margin: 15,
        width: '90%',
        color: 'white'

    }
})

export default class News1 extends Component {

    static navigationOptions = ({navigation})=> {
        return {
            title: navigation.state.params.judulArtikel
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            berita : [
                judulArtikel = '',
                teksArtikel = '',
                heroImage = ''
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <ScrollView>
                
                <View style={{backgroundColor: 'black'}} >
                    <Image
                        source={{uri: `${Address.backEndAddress}/image/${this.props.navigation.state.params.heroImage}`}}
                        style={{width: '100%', height: 200}}
                    />

                    <Text style={{color: 'white', fontSize: 20, textAlign: 'left', margin: 10}}>{this.props.navigation.state.params.judulArtikel}</Text>

                    <Text style={styles.tulisanArtikel} >
                        {this.props.navigation.state.params.teksArtikel}
                    </Text>
                </View>

            </ScrollView>
        )
    }
}
// resizeImage = (e)=> {
//     let widthScreen = Dimensions.get('window').width;
//     let widthOrigin = e.nativeEvent.source.width;
//     let heightOrigin = e.nativeEvent.source.height;
//     let aspectRatio = widthOrigin / heightOrigin;
//     let resized = this.state.heroImage;
//     resized.width = widthScreen;
//     resized.height = widthScreen / aspectRatio;
//     this.setState({heroImage: resized});
// }

// onLoad={(e)=> this.resizeImage(e)}
// style={{width: this.state.heroImage.width, height: this.state.heroImage.height}}