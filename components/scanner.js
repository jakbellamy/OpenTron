import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';
import {Container, Header, Left, Body, Right, Button, Icon, Text, Content, Footer } from 'native-base'

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
          
          <View style={{ flex: 1}} >
            <Camera ref={ref => {this.camera = ref}}style={{ flex: 1 }} type={this.state.type}>
              <Content padder style={{position: 'absolute'}}>
                <Left>
                  <Button bordered transparent onPress={() => this.props.selectView('menu')}>
                    <Icon name='menu' />
                  </Button>
                </Left>
              </Content>

              <Content padder style={{position: 'absolute', left: '80%'}}>
               <Right >
                  <Button bordered transparent onPress={() => console.log('add flash')}>
                    <Icon name='flash' />
                  </Button>
                </Right>
              </Content>

              <Content style={{position: 'absolute', top: '86%', left: '43%'}}>
                <Button block large rounded bordered transparent onPress={(e) => {this.snap(e)}}>
                  <Icon large name='aperture'/>
                </Button>
              </Content>
            </Camera>
          </View>
        );
      }
    }
  }