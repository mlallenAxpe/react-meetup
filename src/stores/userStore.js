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

  setUser(user) {
    this.user = user
    this.setFavoriteList(user.favorites ?? [])
  }

  async getUser(id) {
    let user = await getUser(id)
    this.setUser(user)
  }

  async createUser(data) {
    let user = await createUser(data)
    this.setUser(user)
  }

  async updateUser(id, data) {
    await updateUser(id, data)
    await this.getUser(id)
  }

  async getFavorites(id) {
    let favorites = await getFavorites(id)
    this.setUser({...this.user, favorites})
    return favorites
  }

  setFavorites = async (user, data) => {
    await updateFavorites(user._id, data)
    this.setUser({...this.user, favorites: data})
    return this.user
  }

  resetUser() {
    this.setUser(null)
  }
}

export default UserStore