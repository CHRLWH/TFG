import React from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const NavbarHome = ({}) => {
  const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.contenedor}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={40} color="#FFF" />
        </TouchableOpacity> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
});

export default NavbarHome;
