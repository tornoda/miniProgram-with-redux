//index.js
import { store } from '../../app'
import { increase, fetch, GAME_LIST } from '../../actions/index'

const { dispatch, subscribe, getState } = store

Page({
  data: {
    syncData: 'Hello World',
    number: '0',
  },
  onLoad: function () {
    const _this = this
    //发出一个异步action
    dispatch(fetch(GAME_LIST, {
      url: 'http://open.douyucdn.cn/api/RoomApi/game'
    })).then((data) => { console.log(data) })
    //在onLoad函数中订阅state的更新
    //如果state变化，对应ui就会更新
    subscribe(() => {
      const { asyncData: { status }, theIncreasingNo } = getState()
      _this.setData({
        syncData: `
          请求状态：${status}, 
          返回的数据请查看控制台
        `,
        number: theIncreasingNo
      })
    })
  },
  testSyncAction: function () {
    //发出一个同步action
    dispatch(increase)
  }
})
