import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Login from './components/login'
import Menu from './components/menu'
import Scanner from './components/scanner'
import Navbar from './components/navbar';
import { Container } from 'native-base';

export default class App extends React.Component {

    state = {
        view: 'menu',
        loggedIn: true,
        keys: [],
        classrooms: []
    }

    fetchKeys = () => {
        fetch('http://192.168.0.28:5000/keys')
        .then(res => res.json())
        .then(keys => this.setState({keys}))
        .catch(err => console.log('error fetching keys: ' + err))
    }    
    fetchClassrooms = () => {
        fetch('http://192.168.0.28:5000/classrooms')
        .then(res => res.json())
        .then(classrooms => this.setState({classrooms}))
        .catch(err => console.log('error fetching keys: ' + err))
    }    

    componentDidMount(){
        this.fetchKeys()
        this.fetchClassrooms()
        console.log(this.state.classrooms)
    }

    logFlip = () => {
        if(this.state.loggedIn){
            this.setState({loggedIn: false, view: 'login'})
        }else{
            this.setState({loggedIn: true, view: 'menu'})
        } 
    }
    selectView = (selected) => {this.setState({view: selected})}

    render() {
        return (
            <Container>
              {this.state.view != 'scanner' ?
                <Navbar selectView={this.selectView} view={this.state.view}/>
                :
                null
              }  
            
                {(() => {
                    switch (this.state.view) {
                        case 'login':
                            return <Login />
                        case 'menu':
                            return <Menu keys={this.state.keys} classrooms={this.state.classrooms}/>
                        case 'scanner': {
                            return <Scanner selectView={this.selectView}/>
                        }
                    }
                })()}

            </Container>

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
})
