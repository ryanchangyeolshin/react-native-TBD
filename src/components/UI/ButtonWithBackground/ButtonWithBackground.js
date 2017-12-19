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
  if (props.disabled) {
    return (
      <View
        style={[
          props.style,
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
  }

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        style={[
          props.style,
          styles.button,
          { borderColor: props.color },
          props.disabled ? styles.disabled : null
        ]}
        onPress={props.onPress}>
        <Text
          style={[
            { color: props.color },
            props.disabled ? styles.disabledText : styles.buttonText
          ]}
        >
          {props.children}
        </Text>
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity
      style={[
        props.style,
        styles.button,
        { borderColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          { color: props.color },
          props.disabled ? styles.disabledText : styles.buttonText
        ]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
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
