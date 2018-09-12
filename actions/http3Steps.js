export const REQUSET_BEGIN = 'REQUEST_BEGIN'

export const RECEIVED = 'RECEIVED'

export const REQUEST_FAILED = 'REQUEST_FAILED'

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