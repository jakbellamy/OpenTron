import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

const postRequest = (e, photo) => {
  e.preventDefault()
  console.log('hit')
  fetch(`https://opentron.appspot.com/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image: photo,
      name: 'test.jpg'
    })
  })
  .then(res => res.text())
  .then(res => console.log("res: " + res))
  .catch(err => console.log("error: " + err))
}

export default class Scanner extends React.Component {
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photo: ''
    }
  
    async componentDidMount() {
      const permission = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: permission.status === 'granted' });
    }

    snap = async (e) => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync(options={base64: true, quality: 0.2});
        postRequest(e, photo.base64)
      };
    }



    render() {
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera ref={ref => {this.camera = ref}}style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={(e) => {this.snap(e)}}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    Capture
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }
    }
  }