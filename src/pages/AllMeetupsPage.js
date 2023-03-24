import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

import { useStores } from "../util-hooks/useStores";
import { useEffect, useState } from "react";

export default function AllMeetupsPage(props) {
  const {meetupStore, userStore} = useStores()

  const { meetupList } = meetupStore
  const { user, favorites, setFavorites } = userStore

  const [meetups, setMeetups] = useState([])

  async function fetchMeetups() {
    try{
      let meets = await meetupStore.getMeetups()
      setMeetups(meets)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchUser() {
    try{
      await userStore.getUser('641d6168e0d76eeaf30b030c')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMeetups()
    fetchUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(meetupList && meetupList.length) setMeetups(meetupList)
  }, [meetupList])

  const setFavorite = (id) => {
    setFavorites(user, [...favorites, id])
  }

  const unsetFavorite = (id) => {
    let index = user.favorites.indexOf(id)
    if (index > -1){
      let copy = [...user.favorites]
      copy.splice(index,1)
      setFavorites(user, copy)
    }
  }
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul key="meetupList" className={classes.list}>
        {meetups && meetups.length && meetups.map(meet => <MeetupItem key={meet._id} value={meet} setFave={setFavorite} unsetFave={unsetFavorite} isFave={favorites.includes(meet._id)}/>)}
      </ul>
    </section>
  );
}
