import { useEffect, useState } from "react";
import FavoriteItem from "../components/meetups/FavoriteItem";

import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage(props) {
  const { favorites, meetups } = props
  const [show, setShow] = useState([])

  useEffect(() => {
    if (meetups && meetups.length && favorites && favorites.length) {
      let s = meetups.filter(meetup => favorites.includes(meetup.id))
      setShow(s)
    }
  }, [favorites, meetups])

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {show && show.map(favorite => <FavoriteItem key={favorite.id} value={favorite} />)}
      </ul>
    </section>
  );
}
