import React from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const TitleScreen = ({}) => {
  const navigation = useNavigation(); 
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  // Obtener la navegación en un componente hijo
  return (
    <SafeAreaView style={{marginTop:"50%",backgroundColor: "black", flex: 0, flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="exit" size={40} color="#FFF">Inicio</Icon>
        </TouchableOpacity> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   
});

export default TitleScreen;
