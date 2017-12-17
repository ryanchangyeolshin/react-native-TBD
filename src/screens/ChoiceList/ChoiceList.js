import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground
} from 'react-native'
import uuid from 'uuid-v4'
import ChoiceItem from '../../components/ChoiceItem/ChoiceItem'
import backgroundImage from '../../assets/background.jpg'

class ChoiceListScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.listContainer}
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
    </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  return {
    choices: state.choices.choices
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 5
  }
})

export default connect(mapStateToProps, null)(ChoiceListScreen)
