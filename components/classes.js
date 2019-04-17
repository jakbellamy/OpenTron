import React from 'react'
import { Content, Text, CardItem, Right, Card, Icon, Button } from 'native-base';

export default class ClassCardContainer extends React.Component {
  render() {
    console.log(this.props.periods)
    return (
      <Content>
        {this.props.periods.map(function(period) {
          return <Card>
            <CardItem>
              <Text>{period.name}</Text>
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