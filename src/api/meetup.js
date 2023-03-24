import { api } from ".";

export async function getMeetups() {
  try {
    const response = await api.get('/meetup')
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}

export async function getMeetup(id){
  try {
    const response = await api.get(`/meetup/${id}`)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}

export async function createMeetup(meetup) {
  try {
    const response = await api.post('/meetup', meetup)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}

export async function updateMeetup(meetup) {
  try {
    const response = await api.post(`/meetup/${meetup._id}`, meetup)
    return response.data
  } catch(error) {
    throw new Error(error)
  }
}