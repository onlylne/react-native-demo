import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import Circle from './circle'

@connect()
export default class Found extends Component {

  static navigationOptions = {
    title: '发现',
    tabBarLabel: '发现',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/icon/found.png')}
      />
    ),
  }

  componentDidMount() {

  }

  render() {
    const {width, height} = Dimensions.get('window');
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/friend_icon.png')} style={{width: 26, height: 26}}/>
              <View style={styles.mgl10}>
                <Text>朋友圈</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.mgt10}>
          <TouchableHighlight onPress={() => {
            navigate('GameList')
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/game_icon.png')} style={{width: 26, height: 26}}/>
              <View style={styles.mgl10}>
                <Text>游戏</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
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
});