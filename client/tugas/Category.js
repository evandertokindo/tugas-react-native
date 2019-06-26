import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Address from '../Address';

const styles = StyleSheet.create({
    oneRowContainer: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKategori: []
    }
  }

  static navigationOptions = ()=> {
    return {
      title: 'Category',
      headerStyle : {
        backgroundColor : 'navy'
      },
      headerTintColor : '#fff'
    }
  }

  componentDidMount() {
    fetch(`${Address.backEndAddress}/daftarKategori`)
    .then(response => response.json())
    .then(res => {
      this.setState({dataKategori: res})
    })
  }

  render() {
      return(
        <View>
          {this.state.dataKategori.map((item, index)=> (
            <TouchableOpacity
              key={index}
              onPress={()=> this.props.navigation.push('ListArtikel', {idKategori: item.id, namaKategori: item.namaKategori})}
            >
              <View style={styles.oneRowContainer}>
                <IonIcon name={item.ikon} size={20} style={{marginRight: 10}} />
                <Text>{item.namaKategori}</Text>
              </View>

              </TouchableOpacity>
          ))}
        </View>
      )
    }
}

// AntDesign - aliwangwang
// Entypo - 