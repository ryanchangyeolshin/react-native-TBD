import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
import validate from '../../utility/validate'
import { addChoice } from '../../store/actions/index'
import backgroundImage from '../../assets/background.jpg'

class ChoiceInputScreen extends Component {
  state = {
    controls: {
      choice: {
        value: '',
        valid: false,
        validationRules: {
          isNotEmpty: true,
          minLength: 3
        },
        touched: false,
      },
      author: {
        value: '',
        valid: false,
        validationRules: {
          isNotEmpty: true,
          minLength: 3
        },
        touched: false
      }
    },
    disabled: true
  }

  updateInputState = (type, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [type]: {
            ...prevState.controls[type],
            value: value,
            valid: validate(value, prevState.controls[type].validationRules),
            touched: true
          }
        }
      }
    })
  }

  addChoiceHandler = (choice, author) => {
    const choiceData = {
      choice: choice,
      author: author
    }
    this.props.addChoiceToList(choiceData)
    this.setState(prevState => {
      return {
        controls: {
          choice: {
            ...prevState.controls.choice,
            value: null,
            valid: false
          },
          author: {
            ...prevState.controls.author,
            value: null,
            valid: false
          }
        }
      }
    })
  }

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.imageBackground}
      >
        <DefaultInput
          placeholder='Please enter a choice.'
          value={this.state.controls.choice.value}
          valid={this.state.controls.choice.valid}
          onChangeText={value => this.updateInputState('choice', value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <DefaultInput
          value={this.state.controls.author.value}
          placeholder='Please enter the author of the choice.'
          valid={this.state.controls.author.valid}
          onChangeText={value => this.updateInputState('author', value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ButtonWithBackground
          disabled={this.state.disabled}
          color="#5f9f89"
          onPress={() => {
            this.addChoiceHandler(
              this.state.controls.choice.value,
              this.state.controls.author.value
            )
          }}
          disabled={
            !this.state.controls.choice.valid ||
            !this.state.controls.author.valid
          }
        >
          Submit
        </ButtonWithBackground>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    choices: state.choices.choices
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addChoiceToList: choiceData => dispatch(addChoice(choiceData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceInputScreen)
