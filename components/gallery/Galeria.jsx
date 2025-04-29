import React, {useState, useEffect} from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text, FlatList } from 'react-native';

const imagenEjemplo = require('../../assets/arbolEjemplo.jpg');

const Galeria = () => {
  console.log("Galeria montado"); // Este mensaje se imprimirá cada vez que el componente se monte
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.61:3000/get', {
      method:'GET'
  })
  .then(resp => resp.json())
  .then(image => {
    console.log("Datos recibidos:", image);
    setData(image)
  })

  }, [])
   
const renderData = (item) => {
  return (
    <View>
      <Image source={ {uri: item.image} }/>
      <Text>{item.image}</Text>
    </View>
  )
}
return (

  <SafeAreaView style={styles.container}>
    <View>
      <FlatList
        data = {data}
        renderItem = {({item}) => {
          return renderData(item)
        }}
        keyExtractor = {item => `${item.id}`}
      /></View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedorFoto: {
        width: 150,
        height: 150,
        margin: 10,
        boxShadow:'100px',
    },
    labelDeLasFotos: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    imagen: {
      justifyContent: 'center',
      width:'100%',
      height:'100%',
  }
});

export default Galeria;
