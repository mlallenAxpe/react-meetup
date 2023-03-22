import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "../util-hooks/useFetch";
import { useEffect, useState } from "react";


export default function AllMeetupsPage() {
  const { data } = useFetch({
      url: "/data.json",
    })
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data && data.map(meet => <MeetupItem key={meet.id} data={meet} />)}
      </ul>
    </section>
  );
}
