import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'

@connect()
export default class Mine extends Component {

  static navigationOptions = {
    title: '我',
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/icon/mine.png')}
      />
    ),
  };

  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          navigate('UserInfo')
        }}>
          <View style={styles.userInfoBox}>
            <Image source={require('../../images/headImg.png')} style={{width: 60, height: 60}}/>
            <View style={styles.mgl10}>
              <Text style={styles.mgb10}>joiner</Text>
              <Text>a550884136</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={{paddingTop: 10, borderTopColor: '#eeeeee', borderTopWidth: 1}}>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/wallet.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>钱包</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/collect.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>收藏</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/photo.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>相册</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/card.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>卡包</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/emoji.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>表情</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            navigate('Setting')
          }}>
            <View style={styles.fucItem}>
              <Image source={require('../../images/setting.png')} style={{width: 30, height: 30}}/>
              <View style={styles.mgl10}>
                <Text>设置</Text>
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
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  userInfoBox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    padding: 10,
    alignItems: 'center',
  },
  mgl10: {
    marginLeft: 16,
  },
  mgb10: {
    marginBottom: 10,
  },
  fucItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
  }
})
