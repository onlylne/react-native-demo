import {Toast} from 'antd-mobile'
import {apiConfig} from './index'

const api = `${apiConfig.apiHost}:${apiConfig.apiPort}`
const fetchGet = (url, data) => {
  let newUrl = ''
  if (data) {
    const paramsArray = []
    Object.keys(data).forEach(key => paramsArray.push(`${key}=${data[key]}`))
    if (url.search(/\?/) === -1) {
      newUrl = `${url}?${paramsArray.join('&')}`
    } else {
      newUrl = `${url}&${paramsArray.join('&')}`
    }
  }
  return fetch(`${api}${newUrl}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}

const fetchPost = (url, data) => {
  return fetch(`${api}${url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}

const fetchRequest = (options) => {
  const {url, method, data} = options
  switch (method) {
    case 'get':
      return fetchGet(url, data)
    case 'post':
      return fetchPost(url, data)
    default:
      return fetchGet(url, data)
  }
}

export default function request(options) {
  return fetchRequest(options)
    .then((response) => response.json())
    .then((response) => {
      const {code, message} = response;
      if (code === 201) Toast.info(message)
      return Promise.resolve({
        success: code === 200,
        ...response
      })
    }).catch((error) => {
      console.log(error)
    })
}