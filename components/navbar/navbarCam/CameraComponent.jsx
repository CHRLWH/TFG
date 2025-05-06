import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, ActivityIndicator, Text } from 'react-native';
import { CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';

export default function CameraComponent() {
  const [facing, setFacing] = useState('back');
  const [flash, setFlash] = useState('off');
  const [uploading, setUploading] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false); // Nuevo estado
  const cameraRef = useRef(null);

  const tempPhotoDir = `${FileSystem.cacheDirectory}photos/`;
  const serverUrl = 'https:'; // Reemplaza con tu URL real

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permisos insuficientes', 'Se necesitan permisos para acceder a la galería');
      }
    })();
  }, []);

  const toggleCameraType = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
  };

  const uploadImageToServer = async (fileUri) => {
    setUploading(true);

    try {
      const fileName = fileUri.split('/').pop();

      const formData = new FormData();
      formData.append('photo', {
        uri: fileUri,
        name: fileName,
        type: 'image/jpeg',
      });

      formData.append('userId', 'user123');
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(serverUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Imagen subida exitosamente:', responseData);
        Alert.alert("Éxito", "La imagen se ha subido correctamente al servidor");
        return responseData.imageUrl;
      } else {
        throw new Error(`Error del servidor: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      Alert.alert("Error", `No se pudo subir la imagen al servidor: ${error.message}`);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const takePicture = async () => {
    if (!cameraRef.current || !isCameraReady) {
      Alert.alert("Espera", "La cámara aún se está preparando...");
      return;
    }

    try {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });
      const fileName = `photo_${Date.now()}.jpg`;

      const dirInfo = await FileSystem.getInfoAsync(tempPhotoDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(tempPhotoDir, { intermediates: true });
      }

      const tempUri = `${tempPhotoDir}${fileName}`;

      await FileSystem.moveAsync({
        from: photo.uri,
        to: tempUri,
      });

      const serverImageUrl = await uploadImageToServer(tempUri);

      console.log("Foto guardada en el servidor:", serverImageUrl);

      await FileSystem.deleteAsync(tempUri);

      return serverImageUrl;
    } catch (error) {
      console.error("Error al procesar la foto:", error);
      Alert.alert("Error", `No se pudo procesar la foto: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        flashMode={flash}
        enableTorch={flash === 'on'}
        ref={cameraRef}
        onCameraReady={() => setIsCameraReady(true)} // <- aquí se marca lista
      >
        <View style={styles.controlBar}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleCameraType}>
            <Ionicons name="camera-reverse" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleFlash}>
            <Ionicons name={flash === 'on' ? "flash" : "flash-off"} size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.captureContainer}>
          {uploading ? (
            <View style={styles.uploadingContainer}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.uploadingText}>Subiendo foto...</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
              disabled={uploading || !isCameraReady} // <- botón desactivado si no está lista
            >
              <View style={styles.captureInner} />
            </TouchableOpacity>
          )}
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  uploadingContainer: {
    alignItems: 'center',
  },
  uploadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
