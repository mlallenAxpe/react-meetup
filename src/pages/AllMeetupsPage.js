import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

import { useStores } from "../util-hooks/useStores";
import uniqBy from "../utils/uniqBy";

export default function AllMeetupsPage(props) {
  const { meetups, favorites } = props
  const { userStore } = useStores()

  const { user, setFavorites } = userStore

  const addFavorite = (id) => {
    let copy = uniqBy([...favorites, id])
    setFavorites(copy)
  }

  const removeFavorite = (id) => {
    let index = user.favorites.indexOf(id)
    if (index > -1){
      let copy = [...user.favorites]
      copy.splice(index,1)
      setFavorites(copy)
    }
  }
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul key="meetupList" className={classes.list}>
        {meetups && meetups.length && meetups.map(meet => 
          <MeetupItem key={meet._id}
                      value={meet}
                      setFave={addFavorite}
                      unsetFave={removeFavorite}
                      isFave={favorites.includes(meet._id)}
          />
        )}
      </ul>
    </section>
  );
}
