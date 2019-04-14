import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

export default class Scanner extends React.Component {
  
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
      // isCapturing: 'false'
    }
  
    async componentDidMount() {
      const permission = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: permission.status === 'granted' });
    }

    options = {
      base64: true
    }
    
    render() {
      ImagePicker.launchCameraAsync(this.options)
      .then((success) => {
        console.log("success: "+ success)
      }, (err) => {
        console.log("error: " + err)
      })
      return (
        console.log('camera on')
      );
    }
  }