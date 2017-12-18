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
import { deleteAllChoices } from '../../store/actions/index'
import backgroundImage from '../../assets/background.png'

class ChoiceListScreen extends Component {
  state = {
    clearChoicesAnimation: new Animated.Value(1)
  }

  clearAllChoicesHandler = () => {
    Animated.timing(this.state.clearChoicesAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.props.clearAllChoices()
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
            onPress={this.clearAllChoicesHandler}
            disabled={this.props.choices.length === 0}
          >
            Clear
          </ButtonWithBackground>
        </View>
        <Animated.View
          style={{
            opacity: this.state.clearChoicesAnimation
          }}
        >
          <FlatList
            data={this.props.choices}
            keyExtractor={() => uuid()}
            renderItem={info => (
              <ChoiceItem
                key={uuid()}
                choice={info.item.choice}
                author={info.item.author}
              />
          )}
          />
        </Animated.View>
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
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen)
