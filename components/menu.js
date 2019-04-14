// JavaScript source code
import React from 'react';
import { StyleSheet, TextAppRegistry, Text, TextInput, View } from 'react-native';


export default class Menu extends React.Component{


    render() {
        return (
            <>
                <Text
                    style={{ color: 'black', position: 'absolute', top: '30%', left: '40%' }}
                    onPress={() => this.props.login()}
                >
                   Login
                </Text>

                <Text style={{ color: 'black', position: 'absolute', top: '40%', left: '40%' }}
                    onClick={() => { }}>
                    Submit Keys
                </Text>

                <Text style={{ color: 'black', position: 'absolute', top: '50%', left: '40%' }}>
                    Grade Tests
                </Text>

                <Text
                    style={{ color: 'black', position: 'absolute', top: '60%', left: '40%' }}
                    onPress={() => this.props.camera()}
                >
                    Camera
                </Text>
                
            </>
        )
    }
}