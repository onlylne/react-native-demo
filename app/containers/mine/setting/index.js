import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  View,
  Button
} from 'react-native'
import { createAction, NavigationActions } from '../../../utils'

@connect(({app})=>({app}))
export default class Setting extends Component {
  static navigationOptions = {
    headerTitle: '设置'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.logout}
          title="退出登录"
        />
      </View>
    )
  }
}