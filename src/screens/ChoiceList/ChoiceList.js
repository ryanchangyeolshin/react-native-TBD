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
import { deleteAllChoices, getWinningChoice } from '../../store/actions/index'
import backgroundImage from '../../assets/background.png'

class ChoiceListScreen extends Component {
  state = {
    choiceListAnimation: new Animated.Value(1),
    randomized: false
  }

  clearAllChoicesHandler = () => {
    Animated.timing(this.state.choiceListAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.props.clearAllChoices()
      this.setState({ randomized: false })
    })
  }

  randomizeChoiceHandler = () => {
    this.setState({ randomized: true })
    const winningIndex = Math.floor(Math.random() * this.props.choices.length)
    Animated.timing(this.state.choiceListAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.props.getWinningRandomChoice(winningIndex)
      Animated.timing(this.state.choiceListAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start()
    })
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
            style={{ flex: 0.5 }}
            onPress={this.clearAllChoicesHandler}
            disabled={this.props.choices.length < 1}
          >
            Clear
          </ButtonWithBackground>
          <ButtonWithBackground
            color='yellow'
            style={{ flex: 0.5 }}
            onPress={this.randomizeChoiceHandler}
            disabled={this.props.choices.length < 2}
          >
            Randomize
          </ButtonWithBackground>
        </View>
        <View style={styles.choicesContainer}>
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
                  randomized={this.state.randomized}
                />
              </Animated.View>
          )}
          />
        </View>
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
    clearAllChoices: () => dispatch(deleteAllChoices()),
    getWinningRandomChoice: winningIndex => dispatch(getWinningChoice(winningIndex))
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  choicesContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen)
