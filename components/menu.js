// JavaScript source code
import React from 'react';
import {Content, List, ListItem, Text, Button, Icon, Picker } from 'native-base';
import ClassCardContainer from './classes';
import Keys from './keys';
import About from './about';

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

              {this.state.selected == 'class' ? 
              <ClassCardContainer periods={this.props.periods}/> 
              : null}

              <ListItem onPress={!this.state.selected ? () => this.selectItem('key') : this.deselectItem}>
                {this.state.selected == 'key' ? <Icon name="arrow-up"/> : <Icon name="arrow-down"/>}
                <Text style={{position: 'absolute', left: '40%'}}>Set Key</Text>
              </ListItem>

              {this.state.selected == 'key' ? 
              <Keys keys={this.props.keys}/> 
              : null}

              <ListItem onPress={!this.state.selected ? () => this.selectItem('about') : this.deselectItem}>
              {this.state.selected == 'about' ? <Icon name="arrow-up"/> : <Icon name="arrow-down"/>}
                <Text style={{position: 'absolute', left: '40%'}}>About</Text>
              </ListItem>

              {this.state.selected == 'about' ? <About /> : null}
            </List>
          </Content>
        )
    }
}