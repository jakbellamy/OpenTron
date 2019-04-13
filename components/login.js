// JavaScript source code
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component
{
    state =
        {
            username: "",
            password: "",
        }

    render()
    {
        return(
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                Please Login
            </Text>
        )
    }
}