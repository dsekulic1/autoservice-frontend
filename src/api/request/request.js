import { post, get } from './common'

const requestUrl = '/api/v1/request'

export const getAllRequests = async () => {
  return await get(requestUrl + '/all')
}

export const addRequest = async (request) => {
  return await post(requestUrl, request)
}
