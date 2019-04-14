import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Permissions } from 'expo';
import Login from './components/login';
import Menu from './components/menu';
import Scanner from './components/scanner'

export default class App extends React.Component {

    state = {
        view: 'menu'
    }

    switchLogin = () => {this.setState({view: 'login'})}
    switchMenu = () => { this.setState({view: 'menu'})}
    switchCamera = () => { this.setState({view: 'camera'})}

    render() {
        return (
            <>
                <Text
                    onPress={() => this.switchMenu()}
                    style={{ color: 'black', position: 'absolute', top: '20%', left: '20%' }}
                >Menu</Text>
                {(() => {
                    switch (this.state.view) {
                        case 'login':
                            return <Login />
                        case 'menu':
                            return <Menu login={this.switchLogin} camera={this.switchCamera}/>
                        case 'camera': {
                            return <Scanner menu={this.switchMenu}/>
                        }
                    }
                })()}
            </>

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
