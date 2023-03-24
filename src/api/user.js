import { api } from ".";

export async function getUser(id){
  try {
    const response = await api.get(`/user/${id}`)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}
  
export async function createUser(user) {
  try {
    const response = await api.post('/user', user)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}
  
export async function updateUser(user) {
  try {
    const response = await api.post(`/user/${user._id}`, user)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}

export async function getFavorites(id) {
  try {
    const response = await api.get(`/user/${id}/favorites`)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}

export async function updateFavorites(id, favorites) {
  try {
    const response = await api.post(`/user/${id}/favorites`, {favorites})
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}