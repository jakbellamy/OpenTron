import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera, Permissions } from 'expo';
import Login from './components/login';
import Menu from './components/menu';

export default class App extends React.Component {

    state = {
        view: 'menu'
    }

    switchLogin = () => { this.setState({view: 'login'})}
    async componentDidMount() {
        const permission = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: permission.status === 'granted' });
    }

    render() {
        return (
            <>
                {(() => {
                    switch (this.state.view) {
                        case 'login':
                            return <Login />
                        case 'menu':
                            return <Menu login={this.switchLogin}/>
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
