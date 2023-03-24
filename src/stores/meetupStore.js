import { getMeetup, getMeetups, createMeetup, updateMeetup } from "../api/meetup";

class MeetupStore {
  rootStore
  
  constructor(rootStore) {
    this.rootStore = rootStore
  }
  meetupList = []
  currentMeetup = null

  setMeetupList = (list) => {
    this.meetupList = list
  }

  setMeetup = (meetup) => {
    this.currentMeetup = meetup
  }

  async getMeetups() {
    let list = await getMeetups()
    this.setMeetupList(list)
    return list
  }

  async getMeetup(id) {
    let meetup = await getMeetup(id)
    this.setMeetup(meetup)
  }

  async createMeetup(data) {
    await createMeetup(data)
    await this.getMeetups()
  }
  async updateMeetup(id, data) {
    await updateMeetup(id, data)
    await this.getMeetups()
  }

  resetMeetup() {
    this.setMeetup(null)
    this.setMeetupList([])
  }
}

export default MeetupStore