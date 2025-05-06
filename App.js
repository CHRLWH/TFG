import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './components/titleScreen/TitleScreen';  
import Home from'./components/home/Home';
import GalleryPage from './components/gallery/GalleryPage';  
import ClassImage from './components/classes/ClassImage';
import Camera from './components/navbar/navbarCam/CameraComponent';
import GaleriaPrueba from './components/gallery/GaleriaPrueba';  

import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Index">
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="GalleryPage" component={GalleryPage} />
        <Stack.Screen name="Home2" component={Index} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="GaleriaPrueba" component={GaleriaPrueba} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;