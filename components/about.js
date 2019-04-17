import React from 'react'
import { Content, Text, CardItem, Right, Card, Icon } from 'native-base';

export default class About extends React.Component {
  render() {
    return (
      <Content>
         <Card>
            <CardItem>
              <Text>
                OpenTron is an open source alternative to expensive multiple-choice test graders. \n Press 'Set Key' tab on this main menu in order to choose from an existing key, or enter a new key by pressing the '+' button. \n Once your key is set, simply press the camera logo on the top right corner to grade any OpenTron test sheet. \n Classes feature to come later.
              </Text>
            </CardItem>  
          </Card>
      </Content>
    )
  }
}