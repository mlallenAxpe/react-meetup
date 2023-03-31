import { makeAutoObservable } from "mobx";
import { getUser, createUser, updateUser, getFavorites, updateFavorites } from "../api/user";

class UserStore {
  rootStore
  
  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
  user = null
  favorites = []

  setFavoriteList = (list) => {
    this.favorites = list
  }

  setCurrentUser = (user) => {
    this.user = user
    this.setFavoriteList(user.favorites ?? [])
    return user
  }

  getUser = async (id) => {
    let user = await getUser(id)
    this.setCurrentUser(user)
    return user
  }

  async createUser(data) {
    let user = await createUser(data)
    this.setCurrentUser(user)
  }

  async updateUser(id, data) {
    await updateUser(id, data)
    await this.getUser(id)
  }

  async getFavorites(id) {
    let favorites = await getFavorites(id)
    this.setCurrentUser({...this.user, favorites})
    return favorites
  }

  setFavorites = async (data) => {
    await updateFavorites(this.user._id, data)
    this.setCurrentUser({...this.user, favorites: data})
    this.setFavoriteList(data)
    return this.user
  }

  resetUser() {
    this.setCurrentUser(null)
  }
}

export default UserStore