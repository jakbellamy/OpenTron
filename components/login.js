// JavaScript source code
import React from 'react';
import { StyleSheet, TextAppRegistry, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component
{
    state =
        {
            username: '',
            password: '',
        }

    setUser = (input) => { this.setState({ username: input }) }
    setPassword = (input) => { this.setState({ password: input }) }

    render() {
        console.log("Username: ", this.state.username)
        console.log("Password: ", this.state.password)
        return (
        <>
            <Text style={{color:'black', position:'absolute', top:'30%', left:'40%'}}>
                Please Login
            </Text>
            <Text style={{ color: 'black', position: 'absolute', top: '45%', left: '40%' }}>
                    Username:
            </Text>

            <TextInput
               style={{ color: 'black', position: 'absolute', top: '50%', left: '30%' }}
               placeholder="eg robert johnson"
               onChangeText={(text) => this.setUser(text)}
           />

            <Text style={{ color: 'black', position: 'absolute', top: '55%', left: '40%' }}>
                   Password:
            </Text>

                <TextInput
                    style={{ color: 'black', position: 'absolute', top: '60%', left: '30%' }}
                    placeholder="eg PaulIsDead"
                    onChangeText={(text) => this.setPassword(text)}
                />
               
        </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


