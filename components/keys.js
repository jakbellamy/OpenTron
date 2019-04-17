import React from 'react'
import { Content, Text, CardItem, Right, Card, Icon } from 'native-base';

export default class Keys extends React.Component {
  render() {
    return (
      <Content>
        {this.props.keys.map(function(key) {
          return <Card>
            <CardItem>
              <Text>{key}</Text>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </CardItem>  
          </Card>})}
      </Content>
    )
  }
}