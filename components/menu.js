// JavaScript source code
import React from 'react';
import {Content, List, ListItem, Text, Button, Icon, Picker } from 'native-base';

let show = 'default'

export default class Menu extends React.Component{

    state = {
        selected: false
    }

    selectItem = (item) => {this.setState({selected: item})}
    deselectItem = () => {this.setState({selected: false})}

    render() {
        return (
            <Content>
            <List>
              <ListItem onPress={!this.state.selected ? () => this.selectItem('class') : this.deselectItem}>
              {this.state.selected == 'class' ? <Icon name="arrow-up"/> : <Icon name="arrow-down"/>}
                <Text style={{position: 'absolute', left: '40%'}}>Set Class</Text>
              </ListItem>

              <ListItem onPress={!this.state.selected ? () => this.selectItem('key') : this.deselectItem}>
                {this.state.selected == 'key' ? <Icon name="arrow-up"/> : <Icon name="arrow-down"/>}
                <Text style={{position: 'absolute', left: '40%'}}>Set Key</Text>
              </ListItem>

              <ListItem onPress={!this.state.selected ? () => this.selectItem('about') : this.deselectItem}>
              {this.state.selected == 'about' ? <Icon name="arrow-up"/> : <Icon name="arrow-down"/>}
                <Text style={{position: 'absolute', left: '40%'}}>About</Text>
              </ListItem>
            </List>
          </Content>
        )
    }
}