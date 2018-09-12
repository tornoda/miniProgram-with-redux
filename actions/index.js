import { requestBegin, received, requestFailed } from './http3Steps'
import toPromise from '../module/requestPromise'

const toPromiseWx = toPromise(wx)
const request = toPromiseWx('request')

export const INCREASE = 'INCREASE'

export const increase = {
  type: INCREASE
}

export const GAME_LIST = '_GAME_LIST'

export const fetch = (requestName, option) => {
  return (dispatch) => {
    dispatch(requestBegin(requestName))
    return request(option)
      .then(
        (res) => { dispatch(received(requestName, res)); return res },
        (err) => { dispatch(requestFailed(requestName, err)) }
      )
  }
}

