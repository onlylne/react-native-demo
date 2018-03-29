import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import { connect } from 'react-redux'

@connect()
export default class AddressList extends Component {

  static navigationOptions = {
    title: '通讯录',
    tabBarLabel: '通讯录',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/icon/book.png')}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>通讯录</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    width: 20,
    height: 20,
  },
})
