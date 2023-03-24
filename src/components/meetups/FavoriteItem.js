import { useEffect, useState } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function FavoriteItem(props) {
  let { value, unsetFave } = props
  const [data, setData] = useState({id: '', title: '', image: '', address: '', description: ''})

  useEffect(() => {
    setData(value)
  },[value])

  return (
    <li key={data._id} className={classes.item} data-test='meet-up-item'>
      <Card>
        <div key={`${data._id}_image`} className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div key={`${data._id}_text`} className={classes.content}>
          <h3 key={`${data._id}_text_title`}>{data.title}</h3>
          <address key={`${data._id}_text_address`}>{data.address}</address>
          <p key={`${data._id}_text_description`}>{data.description}</p>
        </div>
        <div key={`${data._id}_button`} className={classes.actions}>
          <button onClick={()=>unsetFave(data._id)}>Remove from favorites</button>
        </div>
      </Card>
    </li>
  );
}
