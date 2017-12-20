import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import backgroundImage from '../../assets/background.png'

const ChoiceDetailScreen = props => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}>
      <View style={styles.choiceContainer}>
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
      </View>
      <View style={styles.authorContainer}>
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
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  choiceContainer: {
    padding: 10
  },
  authorContainer: {
    padding: 10,
    marginTop: 10
  },
  text: {
    fontSize: 40
  },
  headerText: {
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  choiceText: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ChoiceDetailScreen
