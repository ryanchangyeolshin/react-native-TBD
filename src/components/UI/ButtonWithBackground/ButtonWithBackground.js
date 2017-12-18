import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'

const ButtonWithBackground = props => {
  const content = (
    <View
      style={[
        styles.button,
        { borderColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text
        style={[
          { color: props.color },
          props.disabled ? styles.disabledText : styles.buttonText
        ]}
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
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  disabledText: {
    color: '#aaa',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ButtonWithBackground
