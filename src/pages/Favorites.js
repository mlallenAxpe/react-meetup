import { useEffect, useState } from "react";
import FavoriteItem from "../components/meetups/FavoriteItem";

import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage(props) {
  const { favorites, meetups, setFavorites } = props
  const [show, setShow] = useState([])

  const unsetFavorite = (id) => {
    let index = favorites.indexOf(id)
    if (index > -1){
      let copy = [...favorites]
      copy.splice(index,1)
      setFavorites(copy)
    }
  }

  useEffect(() => {
    if (meetups && meetups.length && favorites && favorites.length) {
      let s = meetups.filter(meetup => favorites.includes(meetup.id))
      setShow(s)
    } else {
      setShow([])
    }
  }, [favorites, meetups])

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {show && show.map(favorite => <FavoriteItem key={favorite.id} value={favorite} unsetFave={unsetFavorite}/>)}
      </ul>
    </section>
  );
}
