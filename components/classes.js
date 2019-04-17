import React from 'react'
import { Content, Text, CardItem, Right, Card, Icon } from 'native-base';

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
      </Content>
    )
  }
}