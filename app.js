//app.js
import reducer from './reducer/index'
import { createStore, applyMiddleware } from './module/redux'
import logger from './module/redux-logger'
import thunkMiddleware from './module/redux-thunk'

//创建redux store
export const store = createStore(
  reducer,
  applyMiddleware(
    logger,//用于控制台state调试
    thunkMiddleware//用于处理异步action
  )
)

App({
})