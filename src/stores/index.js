import MeetupStore from "./meetupStore";
import UserStore from "./userStore";

export class RootStore {
  meetupStore
  userStore

  constructor() {
    this.meetupStore = new MeetupStore(this)
    this.userStore = new UserStore(this)
  }
}

export const rootStore = new RootStore()