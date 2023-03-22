import { Link } from 'react-router-dom'

import { useScrollDirection } from "../../utils/scrollDirection";
import './MainNavigation.module.css'
import classes from "./MainNavigation.module.css";

export default function MainNavigation(props) {
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
            <Link to="/favorites">My Favorites <span className={classes.badge}>{props.favorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
