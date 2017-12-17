import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ChoiceItem = props => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listTextContainer}>
        <Text style={styles.listText}>{props.choice}</Text>
      </View>
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
    backgroundColor: '#eee',
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
