import { useEffect, useState } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem(props) {
  let { value, isFave, setFave, unsetFave } = props
  const [data, setData] = useState({id: '', title: '', image: '', address: '', description: ''})

  useEffect(() => {
    setData(value)
  },[value])

  return (
    <li key={data.id} className={classes.item} data-test='meet-up-item'>
      <Card>
        <div key={`${data.id}_image`} className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div key={`${data.id}_text`} className={classes.content}>
          <h3 key={`${data.id}_text_title`}>{data.title}</h3>
          <address key={`${data.id}_text_address`}>{data.address}</address>
          <p key={`${data.id}_text_description`}>{data.description}</p>
        </div>
        <div key={`${data.id}_button`} className={classes.actions}>
          {!isFave && <button onClick={()=>setFave(data.id)}>Add to favorites</button>}
          {isFave && <button onClick={()=>unsetFave(data.id)}>Remove from favorites</button>}
        </div>
      </Card>
    </li>
  );
}
