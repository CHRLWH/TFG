import React, { useState } from "react";
import { View, Button, Image, Alert, Text,TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import LoadingOverlay from "../../pantallaDeCarga/loadingScreen";
import Icon from 'react-native-vector-icons/Ionicons';

const imageCamera = require('../../../assets/camera.png');
const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const NavbarCamera= () => {
  const [imageUri, setImageUri] = useState(null);
   const [loading, setLoading] = useState(false); // Estado para controlar la pantalla de carga
 
   // 📷 Tomar foto
   const takePhoto = async () => {
     const permission = await ImagePicker.requestCameraPermissionsAsync();
     if (!permission.granted) {
       Alert.alert("Permiso requerido", "Se necesita acceso a la cámara.");
       return;
     }
 
     const result = await ImagePicker.launchCameraAsync({ base64: false });
 
     if (!result.canceled) {
       const localUri = result.assets[0].uri;
       console.log("URI de la imagen capturada:", localUri);
 
       setImageUri(localUri);
       await saveImageLocally(localUri);
     }
   };
 
   // 📥 Guardar imagen localmente
   const saveImageLocally = async (uri) => {
     try {
       const folderPath = FileSystem.documentDirectory + "TFG-main/components/imgs/";
       await FileSystem.makeDirectoryAsync(folderPath, { intermediates: true });
 
       const fileName = `photo_${Date.now()}.jpg`;
       const newPath = folderPath + fileName;
 
       await FileSystem.copyAsync({ from: uri, to: newPath });
       console.log("Imagen guardada en:", newPath);
 
       // Opcional: guardar en galería
       // await MediaLibrary.saveToLibraryAsync(newPath);
 
       // Subir la imagen al servidor
       await uploadImageToDB(newPath);
     } catch (error) {
       console.error("Error al guardar la imagen:", error);
       Alert.alert("Error", "No se pudo guardar la imagen.");
     }
   };
 
   // 📤 Subir imagen a servidor
   const uploadImageToDB = async (uri) => {
     try {
       setLoading(true);  // Muestra la pantalla de carga
 
       const formData = new FormData();
       formData.append("photo", {
         uri,
         name: uri.split("/").pop(),
         type: "image/jpeg",
       });
 
       const response = await fetch("http://192.168.1.62:3000/upload", {
         method: "POST",
         headers: { "Content-Type": "multipart/form-data" },
         body: formData,
       });
 
       if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);
       const data = await response.json();
       console.log("Imagen subida con éxito:", data);
 
       setLoading(false);  // Oculta la pantalla de carga
       Alert.alert("¡Éxito!", "Imagen subida correctamente.");
     } catch (error) {
       console.error("Error al subir la imagen:", error);
       setLoading(false);  // Oculta la pantalla de carga
       Alert.alert("Error", "Hubo un problema al subir la imagen.");
     }
   };
 
   // 📤 Compartir imagen
   const shareImage = async () => {
     if (imageUri && (await Sharing.isAvailableAsync())) {
       await Sharing.shareAsync(imageUri);
     } else {
       Alert.alert("Error", "No se puede compartir la imagen.");
     }
   };
 
  return (
    <SafeAreaView style={styles.contenedor}>
    <TouchableOpacity  onPress={takePhoto}>
      <Icon name="add-circle" size={40} color="#FFF" />
    </TouchableOpacity>
       {/* Pantalla de carga */}
          <LoadingOverlay visible={loading} message="Subiendo imagen..." />
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    imagen: {
        justifyContent: 'center',
        width:55,
        height:55,
        marginLeft:20,
    }
});

export default NavbarCamera;