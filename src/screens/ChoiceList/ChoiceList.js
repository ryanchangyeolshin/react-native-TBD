import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  Animated
} from 'react-native'
import uuid from 'uuid-v4'
import ChoiceItem from '../../components/ChoiceItem/ChoiceItem'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
import { deleteAllChoices, showListAnimation } from '../../store/actions/index'
import backgroundImage from '../../assets/background.png'

class ChoiceListScreen extends Component {
  state = {
    choiceListAnimation: new Animated.Value(1)
  }

  clearAllChoicesHandler = () => {
    Animated.timing(this.state.choiceListAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.props.clearAllChoices()
    })
  }

  randomizeChoiceHandler = () => {
    alert('HELLO')
  }

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.listContainer}
      >
        <View style={styles.buttonContainer}>
          <ButtonWithBackground
            color='red'
            style={{ flex: 1 }}
            onPress={this.clearAllChoicesHandler}
            disabled={this.props.choices.length === 0}
          >
            Clear
          </ButtonWithBackground>
          <ButtonWithBackground
            color='yellow'
            style={{ flex: 1 }}
            onPress={this.randomizeChoiceHandler}
            disabled={this.props.choices.length === 0}
          >
            Randomize
          </ButtonWithBackground>
        </View>
          <FlatList
            data={this.props.choices}
            keyExtractor={() => uuid()}
            renderItem={info => (
              <Animated.View
                style={{
                  opacity: this.state.choiceListAnimation
                }}
              >
                <ChoiceItem
                  key={uuid()}
                  choice={info.item.choice}
                  author={info.item.author}
                />
              </Animated.View>
          )}
          />
    </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  return {
    choices: state.choices.choices
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearAllChoices: () => dispatch(deleteAllChoices())
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen)
