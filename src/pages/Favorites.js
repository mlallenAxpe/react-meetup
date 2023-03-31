import { useEffect, useState } from "react";
import FavoriteItem from "../components/meetups/FavoriteItem";

import classes from "./../components/meetups/MeetupList.module.css";
import { useStores } from "../util-hooks/useStores";

export default function FavoritesPage(props) {
  const { meetups, favorites, setFavorites } = props
  const { userStore } = useStores()
  
  const [show, setShow] = useState([])

  const unsetFavorite = (id) => {
    let index = favorites.indexOf(id)
    if (index > -1){
      let copy = [...favorites]
      copy.splice(index,1)
      userStore.setFavorites(copy)
    }
  }

  useEffect(() => {
    if (meetups && meetups.length && favorites && favorites.length) {
      let s = meetups.filter(meetup => favorites.includes(meetup._id))
      setShow(s)
    } else {
      setShow([])
    }
  }, [meetups, favorites])

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {show && show.map(favorite => <FavoriteItem key={favorite._id} value={favorite} unsetFave={unsetFavorite}/>)}
      </ul>
    </section>
  );
}
