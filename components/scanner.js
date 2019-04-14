import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions } from 'expo';


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
      base64: true,
      onPictureSaved: function(data){
        console.log(data)
      }
    }

  //   async scan() {
  //     console.log('Button Pressed')
  //     console.log('Taking photo')
  //     if(this.camera){
  //       let photo = await this.camera.takePictureAsync()
  //       photo.then((result) => {
  //         console.log(result)
  //       }, (err) => {
  //         console.log(err)
  //       })
  //       console.log(photo);
  //     }
  // }

  async accessCamera()
  {
    if (this.state.isCapturing)
    {
        let photo = await this.camera.takePictureAsync();
        this.setState({ isCapturing: false, accessCameraLabel: 'Retake', capturedPhoto: photo.uri});
    }
    else
    {
          this.setState({ isCapturing: true, accessCameraLabel: 'Capture', capturedPhoto: null});
    }
  }
  
    render() {
      return (
          <View style={{ flex: 1 }}>
                  {this.state.hasCameraPermission &&
            <Camera style={{ flex: 1 }} type={this.state.type} >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.2,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.props.menu()
                  }
                  }>
                          <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', width: 50, backgroundColor: '#000' }}>
                    {' '}Menu{' '}
                  </Text>
               </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1.2,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => {this.accessCamera()}}
                >
                          <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', width: 50, backgroundColor: '#000' }}>
                        {' '}Scan{' '}
                    </Text>
                </TouchableOpacity>

              </View>
            </Camera>
          }
          </View>
      );
    }
  }