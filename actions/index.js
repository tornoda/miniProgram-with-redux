import { requestBegin, received, requestFailed } from './http3Steps'
import toPromise from '../module/to-promise'

//微信小程序没有提供Promise版本的异步api
//我封装了一个库，把微信小程序异步api转化为Promise，用于处理redux中的异步action
//项目地址：https://github.com/tornoda/to-promise
//使用方法见blog：https://www.cnblogs.com/looyulong/p/9471424.html
const toPromiseWx = toPromise(wx)
const request = toPromiseWx('request')

//这是一个同步的action
export const INCREASE = 'INCREASE'

export const increase = {
  type: INCREASE
}

//这是一个异步action
//网络请求action
//根据redux官网的介绍，它应该是一个Promise，但是微信小程序没有提供Promise版本的异步api，需要使用上面提到的工具库
export const GAME_LIST = '_GAME_LIST'

export const fetch = (requestName, option) => {
  return (dispatch) => {
    dispatch(requestBegin(requestName))//请求开始，更新state状态
    return request(option)
      .then(
        (res) => { dispatch(received(requestName, res)); return res },//请求成功，把返回的信息在state中更新
        (err) => { dispatch(requestFailed(requestName, err)) }//请求失败，把失败的信息在state中更新
      )
  }
}

