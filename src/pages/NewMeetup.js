import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage(props) {
  const { meetups, setMeetups } = props

  const newMeetup = (meetup) => {
    let newId = `m${meetups.length+1}`
    meetup.id = newId
    console.log(meetup)
    setMeetups([...meetups, meetup])
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm newMeetup={newMeetup} />
    </section>
  );
}
