import React, {useState, useEffect} from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text, FlatList } from 'react-native';

const imagenEjemplo = require('../../assets/arbolEjemplo.jpg');

const Galeria = () => {
  console.log("Galeria montado"); // Este mensaje se imprimirá cada vez que el componente se monte
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.62:3000/get', {
      method:'GET'
  })
  .then(resp => resp.json())
  .then(image => {
    console.log("Datos recibidos:", image);
    setData(image)
  })

  }, [])
   
const renderData = (item) => {
  const testImage = `http://192.168.1.62:3000/imgs/${item.image}`
  console.log('Imagen URL:', testImage)
  return (
    <View styles>
      <Image
    source={{ uri: testImage}}
    style={styles.imagen}
  />        

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
  homeContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  detailContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
  },
  font28: {
    fontSize: 28,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 90,
    borderRadius: 5,
    textAlign: 'center',
    marginRight: 8,
  },
  detailsImage: {
    width: '100%',
    height: 400,
  },
  callToActionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  callToAction: {
    backgroundColor: '#add8e6',
    padding: 16,
    width: 250,
    borderRadius: 5,
  },
  callToActionText: {
    color: '#015571',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagen: {
    width: '100%',
    height: 400, // Ajustando según la imagen grande en la primera página
    borderRadius: 15, // Para mantener el diseño uniforme
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },
});

export default Galeria;
