import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: '消息',
    tabBarLabel: '消息',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/icon/mes.png')}
      />
    ),
  }

  render() {
    const { navigate } = this.props.navigation;
    const number = () => (Math.random() * 10).toFixed(0)

    return (
      <View style={styles.container}>
        <Text>home</Text>
        <Button
          onPress={()=>{ navigate('Details', { headerTitle: `文章${number()}` }) }}
          title="test button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
})

export default Home
