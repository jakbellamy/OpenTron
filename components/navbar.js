import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'

export default class Navbar extends React.Component {
  render() {
    return (
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.selectView('menu')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title color="blue">OpenTron</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.selectView('scanner')}>
              {this.props.view ? <Icon name="camera" /> : null}
            </Button>
          </Right>
        </Header>
    );
  }
}