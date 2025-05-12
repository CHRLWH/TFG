import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import CameraComponent from './CameraComponent';

const ImgAnalyzerComponent = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useLegacyCamera, setUseLegacyCamera] = useState(false); 

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        
        setHasCameraPermission(cameraStatus === 'granted');
        setHasMediaLibraryPermission(mediaStatus === 'granted');
      } catch (error) {
        console.error("Error al verificar permisos:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const toggleCameraMode = () => {
    setUseLegacyCamera(prev => !prev);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Iniciando ImgAnalyzer...</Text>
      </SafeAreaView>
    );
  }

  if (!hasCameraPermission || !hasMediaLibraryPermission) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.permissionContainer}>
          <Ionicons name="camera" size={60} color="#0000ff" />
          <Text style={styles.title}>ImgAnalyzer</Text>
          <Text style={styles.permissionText}>Se necesitan permisos para usar la cámara y acceder a tus fotos</Text>
          <TouchableOpacity style={styles.permissionButton} onPress={toggleCameraMode}>
            <Text style={styles.permissionButtonText}>Cambiar modo de cámara</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.cameraContainer}>
      <StatusBar style="light" hidden />
      {useLegacyCamera ? <CameraComponent /> : (
        <CameraView style={styles.cameraView}>
          <View style={styles.switchContainer}>
            <TouchableOpacity style={styles.switchButton} onPress={toggleCameraMode}>
              <Icon name="exchange" size={24} color="#FFF" />
              <Text style={styles.switchText}>Cambiar a {useLegacyCamera ? "CameraView" : "Camera"}</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f0f0', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  cameraContainer: { 
    flex: 1, 
    backgroundColor: '#000' 
  },
  cameraView: { 
    flex: 1 
  },
  permissionContainer: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  text: { 
    color: '#333', 
    fontSize: 16, 
    textAlign: 'center' 
  },
  permissionText: { 
    color: '#333', 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 30 
  },
  permissionButton: { 
    backgroundColor: '#0000ff', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 10 
  },
  permissionButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  switchContainer: { 
    position: 'absolute', 
    bottom: 20, 
    alignSelf: 'center' 
  },
  switchButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    padding: 15, 
    borderRadius: 10 
  },
  switchText: { 
    color: 'white', 
    fontSize: 16, 
    marginLeft: 10 
  },
});

export default ImgAnalyzerComponent;