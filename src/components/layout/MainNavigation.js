import { Link } from 'react-router-dom'

import { useScrollDirection } from "../../utils/scrollDirection";
import './MainNavigation.module.css'
import classes from "./MainNavigation.module.css";
import { useStores } from '../../util-hooks/useStores';
import { useEffect, useState } from 'react';

export default function MainNavigation(props) {
  const { userStore } = useStores()
  const { user, favorites, getUser } = userStore

  const [length, setLength] = useState(0)

  async function fetchUser() {
    try{
      await getUser('641d6168e0d76eeaf30b030c')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(!user) fetchUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {
    setLength(favorites.length)
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
            <Link to="/favorites">My Favorites <span className={classes.badge}>{length}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
