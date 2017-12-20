import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ChoiceItem = props => {
  let content = (
    <View style={styles.listTextContainer}>
      <Text style={styles.listText}>{props.choice}</Text>
    </View>
  )

  if (props.randomized) {
    content = (
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.winningTextContainer}>
        <Text style={styles.listText}>{props.choice}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.listItem}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 3,
    padding: 10
  },
  listTextContainer: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 0.8
  },
  winningTextContainer: {
    backgroundColor: '#f5bf6f',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 0.8
  },
  listText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'transparent'
  }
})

export default ChoiceItem
