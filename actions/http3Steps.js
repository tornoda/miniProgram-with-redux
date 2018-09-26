export const REQUSET_BEGIN = 'REQUEST_BEGIN'

export const RECEIVED = 'RECEIVED'

export const REQUEST_FAILED = 'REQUEST_FAILED'

//创建三个请求http事务时的状态action，用于处理通用http请求
//1 请求开始；2 收到请求；3 请求失败
export const requestBegin = (requestName) => ({
  type: REQUSET_BEGIN + requestName
})

export const received = (requestName, res) => ({
  type: RECEIVED + requestName,
  res
})

export const requestFailed = (requestName, err) => ({
  type: REQUEST_FAILED + requestName,
  err
})