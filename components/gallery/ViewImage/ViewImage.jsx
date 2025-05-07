// ImageDetails.js
import React, {useState}from 'react';
import { ImageBackground,  ScrollView,  TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, FlatList } from 'react-native';
import Navbar from '../../navbar/Navbar';
import 'react-native-gesture-handler';
import Animated , {withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Marquee } from '@animatereactnative/marquee';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const ViewImage = ({ route, navigation }) => {
  const { image } = route.params;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://192.168.1.55:3000/delete/${image.id}/`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Imagen eliminada exitosamente');
        navigation.goBack(); // Regresar a la pantalla anterior
      } else {
        console.log('Error al eliminar la imagen');
        navigation.goBack(); // Regresar a la pantalla anterior

      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  const testImage = `http://192.168.1.55:3000/imgs/${image.image}`;
  return (
    
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{url : testImage}}
        style={{ width: '100%', height: 300, marginBottom: 20, boxShadow: '20px 10px rgb(209, 104, 104)', borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopLeftRadius:50,borderTopRightRadius:50,marginTop:"20%"}}
      />
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop:20}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>{image.image}</Text>
        {/* Aquí mas detalles de la imagen llamando al back */}
        <Text style={{fontSize:25}}>{image.descripcion}</Text>
        <Text style={{fontSize:20}}>{image.fechaHora}</Text>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{image.valor}</Text>

        <Pressable style={styles.boton} onPress={handleDelete}>
          <Text style={styles.botonTexto}>Borrar Imagen</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
          <Navbar/>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    marginLeft:20,

  },
  boton: {
    backgroundColor: "#D32F2F", // amarillo similar
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    boxShadow: '0px 10px rgb(243, 175, 175)',
    borderBottomColor:'black',
    width:200
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default ViewImage;
