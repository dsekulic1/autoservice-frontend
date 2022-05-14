import { basicGet, basicPut, basicPost } from '../common'

export const get = async (url) => {
  return await basicGet(url)
}

export const post = async (url, data) => {
  return await basicPost(url, data)
}

export const put = async (url, data) => {
  return await basicPut(url, data)
}
