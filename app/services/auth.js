import { delay } from '../utils'

export const login = async () => {
  await delay(2000)

  return {
    success: true,
    user: {
      username: 'joiner',
      headImg: '',
      gander: 1,
      ercode: '',
      area: '四川 成都',
      signature: '大概是个傻子吧！',
    }
  }
}
