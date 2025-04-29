// Suggested code may be subject to a license. Learn more: ~LicenseLog:2535092692.
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground,  ScrollView,  TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, FlatList } from 'react-native';

function TitleScreen() {
  const navigate = useNavigation();

  const handleClick = () => {
    navigate('Home');
  };
  return (
    <SafeAreaView style={{justifyContent: "center",alignItemsÑ:"center"}}>
      <Button title="GO TO HOME "onClick={handleClick}>Go to Home</Button>
    </SafeAreaView>
  );
}

export default TitleScreen;
