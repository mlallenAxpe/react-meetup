import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage(props) {
  const {meetups, favorites, setFavorites} = props
  
  const setFavorite = (id) => {
    setFavorites([...favorites, id])
  }

  const unsetFavorite = (id) => {
    let index = favorites.indexOf(id)
    if (index > -1){
      let copy = [...favorites]
      copy.splice(index,1)
      setFavorites(copy)
    }
  }
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups && meetups.length && meetups.map(meet => <MeetupItem key={meet.id} value={meet} setFave={setFavorite} unsetFave={unsetFavorite} isFave={favorites.includes(meet.id)}/>)}
      </ul>
    </section>
  );
}
