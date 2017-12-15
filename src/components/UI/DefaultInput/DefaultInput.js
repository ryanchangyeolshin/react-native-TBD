import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const DefaultInput = props => {
  return (
    <TextInput
      {...props}
      underlineColorAndroid='transparent'
      style={[
        styles.input,
        props.style
      ]}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    padding: 10
  }
})

export default DefaultInput
