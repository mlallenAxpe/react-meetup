import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import uniqBy from "../utils/uniqBy";

export default function NewMeetupsPage(props) {
  const { meetups, createMeetup, setMeetups } = props
  const navigate = useNavigate()

  const newMeetup = (meetup) => {
    createMeetup(meetup)
    setMeetups(uniqBy([...meetups, meetup]))
    navigate("/allMeetups")
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm newMeetup={newMeetup} />
    </section>
  );
}
