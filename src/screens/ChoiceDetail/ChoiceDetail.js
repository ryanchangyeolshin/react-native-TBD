import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import backgroundImage from '../../assets/background.png'

const ChoiceDetailScreen = props => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}>
      <Text style={[
          styles.text,
          styles.headerText
        ]}>
        The winner is...
      </Text>
      <Text
        style={[
          styles.text,
          styles.choiceText
        ]}>
        {props.winningChoice.author}
      </Text>
      <Text
        style={[
          styles.text,
          styles.headerText
        ]}>So therefore, the choice is...</Text>
      <Text
        style={[
            styles.text,
            styles.choiceText
          ]}>
          {props.winningChoice.choice}
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50
  },
  headerText: {
    backgroundColor: 'transparent'
  },
  choiceText: {
    backgroundColor: 'transparent',
    fontWeight: 'bold'
  }
})

export default ChoiceDetailScreen
