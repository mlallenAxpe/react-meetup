import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function FavoriteItem(props) {
  let { value, unsetFave } = props

  return (
    <li key={value.id} className={classes.item} data-test='meet-up-item'>
      <Card>
        <div key={`${value.id}_image`} className={classes.image}>
          <img src={value.image} alt={value.title} />
        </div>
        <div key={`${value.id}_text`} className={classes.content}>
          <h3 key={`${value.id}_text_title`}>{value.title}</h3>
          <address key={`${value.id}_text_address`}>{value.address}</address>
          <p key={`${value.id}_text_description`}>{value.description}</p>
        </div>
        <div key={`${value.id}_button`} className={classes.actions}>
          <button onClick={()=>unsetFave(value.id)}>Remove from favorites</button>
        </div>
      </Card>
    </li>
  );
}
