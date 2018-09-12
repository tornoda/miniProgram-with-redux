import { INCREASE } from '../actions/index'
import { GAME_LIST } from '../actions/index'
import { REQUSET_BEGIN, RECEIVED, REQUEST_END } from '../actions/http3Steps'

export const disposeIncrease = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      console.log('redux is worked')
      return state + 1
    default:
      return state
  }
}

const preState = {}

export const disposeFetch = (state = preState, action) => {
  switch (action.type) {
    case REQUSET_BEGIN + GAME_LIST:
      return {
        ...state,
        status: 'REQUEST_BEGIN',
      }
    case RECEIVED + GAME_LIST:
      return {
        ...state,
        status: 'RECEIVED',
        res: action.res
      }
    case REQUEST_END + GAME_LIST:
      return {
        ...state,
        status: 'REQUEST_END',
        err: action.err
      }
    default:
      return state
  }
}