import axios from 'axios'

export const hostUrl = process.env.REACT_APP_HOST_URL

export const basicGet = async (url) => {
  return (await axios.get(hostUrl + url)).data
}

export const basicDelete = async (url) => {
  return (await axios.delete(hostUrl + url)).data
}

export const basicPost = async (url, data) => {
  return (await axios.post(hostUrl + url, data)).data
}

export const basicPut = async (url, data) => {
  return (await axios.put(hostUrl + url, data)).data
}
