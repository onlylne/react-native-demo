import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, AlertIOS } from 'react-native'
import { connect } from 'react-redux'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeFocus: '',
      username: '',
      password: '',
    }
  }

  login = () => {
    const {username, password} = this.state;
    if (!username) {
      AlertIOS.alert('提示', '请输入用户名', null, null);
      return;
    }
    if (!password) {
      AlertIOS.alert('提示', '请输入密码', null, null);
      return;
    }

    this.props.dispatch(createAction('app/login')({username, password}))
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundBox}>
          <Image source={require('../images/login_bg.gif')} style={styles.backgroundImage}/>
        </View>
        <View style={styles.inputBox}>
          <Image style={styles.logo} source={require('../images/itspeed.png')}/>
          <TextInput
            autoCapitalize='none'
            style={[styles.input, styles.mgt16, this.state.activeFocus === 'username' ? styles.inputActive : '']}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
            placeholder='请输入用户名'
            placeholderTextColor='#eeeeee'
            selectionColor="#49a9ee"
            onFocus={() => this.setState({activeFocus: 'username'})}
            onBlur={() => this.setState({activeFocus: ''})}
          />
          <TextInput
            autoCapitalize='none'
            secureTextEntry={true}
            style={[styles.input, styles.mgt16, this.state.activeFocus === 'password' ? styles.inputActive : '']}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholder='请输入密码'
            placeholderTextColor='#eeeeee'
            selectionColor="#49a9ee"
            onFocus={() => this.setState({activeFocus: 'password'})}
            onBlur={() => this.setState({activeFocus: ''})}
          />
          <View style={styles.linkBox}>
            <View>
              <Text
                style={styles.linkText}
                onPress={() => {
                }}
              >忘记密码?</Text>
            </View>
            <View>
              <Text
                style={styles.linkText}
                onPress={() => {
                }}
              >注册</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.login}
            style={styles.customBtn}
          >
            <Text style={styles.customBtnText}>
              登录
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  backgroundBox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    // resizeMode: Image.resizeMode.cover,
    //祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
  inputBox: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  input: {
    height: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 4,
    color: '#eeeeee',
    paddingLeft: 10,
  },
  inputActive: {
    borderColor: '#49a9ee',
  },
  mgt16: {
    marginTop: 16,
  },
  linkBox: {
    marginTop: 8,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkText: {
    color: '#f8c82e'
  },
  customBtn: {
    marginTop: 20,
    width: '80%',
    height: 40,
    backgroundColor: '#49a9ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  customBtnText: {
    color: '#fff',
    fontSize: 20,
  }
});

export default Login
