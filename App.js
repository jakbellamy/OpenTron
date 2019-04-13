import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions } from 'expo';
import Login from './components/login';

export default class App extends React.Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        const permission = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: permission.status === 'granted' });
    }

    render() {
        return (
            <Login />
        );
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
