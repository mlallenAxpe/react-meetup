import { Link } from 'react-router-dom'

import { useScrollDirection } from "../../utils/scrollDirection";
import './MainNavigation.module.css'
import classes from "./MainNavigation.module.css";
import { useEffect, useState } from 'react';

export default function MainNavigation(props) {
  const favorites = props.favorites
  const [show, setShow] = useState(undefined)

  useEffect(() => {
    setShow(<Link to="/favorites">My Favorites <span className={classes.badge}>{favorites && favorites.length}</span></Link>)
  }, [favorites])

  const scrollDirection = useScrollDirection()
  return (
    <header className={scrollDirection === 'down' ? classes.header + ' ' + classes.down : classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/allMeetups">All Meetups</Link>
          </li>
          <li>
            <Link to="/newMeetup">Add New Meetup</Link>
          </li>
          <li>
            {show}
          </li>
        </ul>
      </nav>
    </header>
  );
}
