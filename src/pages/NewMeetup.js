import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage(props) {
  const { meetups, setMeetups } = props
  const navigate = useNavigate()

  const newMeetup = (meetup) => {
    let newId = `m${meetups.length+1}`
    meetup.id = newId
    setMeetups([...meetups, meetup])
    navigate("/allMeetups")
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm newMeetup={newMeetup} />
    </section>
  );
}
