import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [user, onChangeUser] = React.useState('');
  const [pasword, onChangePasword] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="User:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePasword}
          value={pasword}
          placeholder="Pasword:"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 1,
    borderWidth: 2,
    padding: 10,
    color: '#000',
  },
});

export default TextInputExample;