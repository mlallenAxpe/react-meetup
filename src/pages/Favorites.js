import { useEffect, useState } from "react";
import FavoriteItem from "../components/meetups/FavoriteItem";

import { useStores } from "../util-hooks/useStores";

import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage(props) {
  const { meetupStore, userStore } = useStores()
  const { meetupList } = meetupStore
  const { user, setFavorites } = userStore
  
  const [show, setShow] = useState([])

  const unsetFavorite = (id) => {
    let index = user.favorites.indexOf(id)
    if (index > -1){
      let copy = [...user.favorites]
      copy.splice(index,1)
      setFavorites(user, copy)
    }
  }

  useEffect(() => {
    if (meetupList && meetupList.length && user.favorites && user.favorites.length) {
      let s = meetupList.filter(meetup => user.favorites.includes(meetup._id))
      setShow(s)
    } else {
      setShow([])
    }
  }, [user, meetupList])

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {show && show.map(favorite => <FavoriteItem key={favorite._id} value={favorite} unsetFave={unsetFavorite}/>)}
      </ul>
    </section>
  );
}
