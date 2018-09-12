//index.js
//获取应用实例
// const convertToPromise = require('../../module/requestPromise.js').convertToPromise(wx)
import convertToPromise from '../../module/requestPromise.js'
import { store } from '../../app'
import { increase, fetch, GAME_LIST } from '../../actions/index'

const convertToPromiseWx = convertToPromise(wx)
const getStorage = convertToPromiseWx('getStorage')
const getLocation = convertToPromiseWx('getLocation')
const request = convertToPromiseWx('request')

const app = getApp()
const { dispatch, subscribe, getState } = store
// const page = store.getState();


const page = Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // store.dispatch(increase)
    // const page = store.getState();
    // this.setData({
    //   motto: page
    // })
    const _this = this
    dispatch(fetch(GAME_LIST, {
      url: 'http://open.douyucdn.cn/api/RoomApi/game'
    })).then((data) => {console.log(data)})
    // console.log(isPromise)
    subscribe(() => {
      const { status } = getState()
      _this.setData({
        motto: status
      })
    })
    // request({
    //   url: 'http://open.douyucdn.cn/api/RoomApi/game'
    // })
    // .then((res) => {
    //   console.log(res)
    //   return res
    // })
    // .then((res) => {
    //   getLocation({
    //     complete: (location) => {
    //     console.log('location:')
    //     console.log(location)
    //   },
    // })})
    //   .then(() => getStorage({
    //     key: 'test'
    //   }))
    //   .then((res) => {
    //     console.log('test: ')
    //     console.log(res)
    //   })

    // requestPromise.tellme();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
