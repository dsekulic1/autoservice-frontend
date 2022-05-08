import { post, get } from './common'

const categoriesUrl = '/api/v1/category'

export const getAllCategories = async () => {
  return await get(categoriesUrl + '/all')
}

export const getCategory = async (id) => {
  return await get(categoriesUrl + '?id=' + id)
}

export const addCategory = async (category) => {
  return await post(categoriesUrl, category)
}
