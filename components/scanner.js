import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class Scanner extends React.Component {
  
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
          <View style={{ flex: 1 }}>
          {this.state.hasCameraPermission &&
            <Camera style={{ flex: 1 }} type={this.state.type}>
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
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.props.scan()
                }
                }>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', width: 50, backgroundColor: '#000' }}>
                  {' '}Scan{' '}
                </Text>
              </TouchableOpacity>
            </Camera>
            
          }
          </View>
      );
    }
  }
