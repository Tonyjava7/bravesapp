import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  onPressLearnMore() {
    console.log("Hello World!!");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>The Braves!!</Text>


        <Text> Hello </Text>

          <Button 
            style = {button.container}
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const button = StyleSheet.create({
  container:{
    backgroundColor:'blue',
    padding:"10px"
  }
});




