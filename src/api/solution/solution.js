import { post, get } from './common'

const requestUrl = '/api/v1/solution'

export const getAllSolutions = async () => {
  return await get(requestUrl + '/all')
}

export const addSolution = async (request) => {
  return await post(requestUrl, request)
}
