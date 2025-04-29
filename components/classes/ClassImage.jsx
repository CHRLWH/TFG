import React, { Component } from 'react';
import {Alert, Button, StyleSheet, View, Text} from 'react-native';



class ClassImage extends Component {
    state = {
        name:"nombre"
    }
    render() {
        return (
            <View>
                <Text>La clase funciona</Text>
                <Text>{this.state.name}</Text>
                <Button title='Click me' onPress={() => this.setState({name:"si hecho"})}/>
            </View>
        );
    }
}

export default ClassImage;