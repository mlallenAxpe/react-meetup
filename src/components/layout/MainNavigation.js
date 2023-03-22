import { useScrollDirection } from "../../utils/scrollDirection";
import './MainNavigation.module.css'
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const scrollDirection = useScrollDirection()
  return (
    <header className={scrollDirection === 'down' ? classes.header + ' ' + classes.down : classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="allMeetups">
              All Meetups
            </a>
          </li>

          <li>
            <a href="newMeetup">
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
