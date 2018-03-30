import { delay, request } from '../utils'
import api from '../config/api'

const { auth } = api;

export async function login (params) {
  return request({
    url: auth.login,
    method: 'get',
    data: params,
  })
}
