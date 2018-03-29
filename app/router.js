import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/home/Home'
import Details from './containers/home/Details'

import AddressList from './containers/addressList'

import Found from './containers/found'
import GameList from './containers/found/game/list'

import Mine from './containers/mine/index'
import MineCard from './containers/mine/userDetails/card'
import UserInfo from './containers/mine/userDetails/userInfo'
import EditPage from './containers/mine/userDetails/editPage'
import UserAddress from './containers/mine/userDetails/userAddress'
import EditAddress from './containers/mine/userDetails/editAddress'
import Setting from './containers/mine/setting'

const HomeNavigator = TabNavigator(
  {
    Home: { screen: Home },
    AddressList: { screen: AddressList},
    Found: { screen: Found },
    Mine: { screen: Mine },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
    tabBarOptions: {
      activeTintColor: '#1296db',
      inactiveTintColor: '#8a8a8a',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        height: 50,
      },
      labelStyle: {
        fontSize: 14,
        margin: 0
      },
      indicatorStyle: {height: 0},
    },
  }
)

const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Details: { screen: Details },
    GameList: { screen: GameList },
    MineCard: { screen: MineCard},
    UserInfo: { screen: UserInfo},
    EditPage: { screen: EditPage},
    UserAddress: { screen: UserAddress},
    EditAddress: { screen: EditAddress},
    Setting: { screen: Setting},
  },
  {
    headerMode: 'float',
  }
)

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: MainNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const addListener = createReduxBoundAddListener('root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentDidMount() {
    initializeListeners('root', this.props.router)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, app, router } = this.props
    if (app.loading) return <Loading />

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener,
    })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default Router
