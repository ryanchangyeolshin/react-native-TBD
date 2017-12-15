import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native'

const ButtonWithBackground = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text
        style={
          props.disabled ? styles.disabledText : styles.buttonText
        }
      >
        {props.children}
      </Text>
    </View>
  )

  if (props.disabled) {
    return content
  }

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  disabledText: {
    color: '#aaa',
    fontWeight: 'bold'
  }
})

export default ButtonWithBackground
