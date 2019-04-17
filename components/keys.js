import React from 'react'
import { Content, Text, CardItem, Right, Card, Icon, Button } from 'native-base';

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

          <Card>
            <CardItem style={{flex: .8, alignItems: 'center', justifyContent: 'center'}}>
              <Button small transparent>
                <Icon name="add" />
              </Button> 
            </CardItem>
          </Card>

      </Content>
    )
  }
}