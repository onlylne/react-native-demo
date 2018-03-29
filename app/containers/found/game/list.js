import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native'


@connect()
export default class GameList extends Component {

  static navigationOptions = {
    headerTitle: '游戏中心',
  };

  constructor(props) {
    super(props)
    this.state = {}
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Text>hhhh</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  fucItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
  },
  mgl10: {
    marginLeft: 16,
  },
  mgt10: {
    marginTop: 10,
  }
})
