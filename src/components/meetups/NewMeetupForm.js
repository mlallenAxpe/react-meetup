import { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const [state, setState] = useState({title: '', image: '', address: '', description: ''})
  
  const { newMeetup } = props
  function submitHandler(event) {
    event.preventDefault();
    newMeetup(state)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" value={state.title} onChange={event => setState({...state, title: event.target.value})} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" value={state.image} onChange={event => setState({...state, image: event.target.value})}  />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" value={state.address} onChange={event => setState({...state, address: event.target.value})}  />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" value={state.description} onChange={event => setState({...state, description: event.target.value})} ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
