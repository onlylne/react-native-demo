import {createAction, NavigationActions, Storage} from '../utils'
import * as authService from '../services/auth'
import {Toast} from 'antd-mobile'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    },
  },
  effects: {
    * loadStorage(action, {call, put}) {
      console.log('123')
      const user = yield call(Storage.get, 'userInfo', false)
      if (user) {
        console.log(user);
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
      }
      yield put(createAction('updateState')({ loading: false}))
    },
    * login({payload}, {call, put}) {
      Toast.loading('登录中...', 0);
      // yield put(createAction('updateState')({ fetching: true }))
      const { success, user } = yield call(authService.login, payload)
      if (success) {
        Toast.hide();
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
      }
      // yield put(createAction('updateState')({ login, fetching: false }))
      Storage.set('userInfo', user)
    },
    * logout(action, {call, put}) {
      yield call(Storage.clear)
      yield put(
        NavigationActions.navigate({ routeName: 'Login' })
      )
      yield put(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
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
