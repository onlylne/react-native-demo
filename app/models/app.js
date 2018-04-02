import {createAction, NavigationActions, Storage} from '../utils'
import {login} from '../services/auth'
import {Toast} from 'antd-mobile'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
    userInfo: {

    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    },
  },
  effects: {
    * loadStorage(action, {call, put}) {
      const user = yield call(Storage.get, 'userInfo', false)
      if (user) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Main'})],
          })
        )
      }
      yield put(createAction('updateState')({loading: false, userInfo: user}))
    },
    * login({payload}, {call, put}) {
      Toast.loading('登录中...', 0);
      // yield put(createAction('updateState')({ fetching: true }))
      // const { success, user } = yield call(login, payload)
      const data = yield call(login, payload)

      if (data.success) {
        Toast.hide();
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Main'})],
          })
        )
        let user = {
          username: 'joiner',
          headImg: '',
          gander: 1,
          ercode: '',
          area: '四川 成都',
          signature: '大概是个傻子吧！',
        }
        // yield put(createAction('updateState')({ login, fetching: false }))
        Storage.set('userInfo', user)
      }
    },
    * logout(action, {call, put}) {
      yield call(Storage.clear)
      yield put(
        NavigationActions.navigate({routeName: 'Login'})
      )
      yield put(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Login'})],
        })
      )
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'loadStorage'})
    },
  },
}
