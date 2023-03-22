import React from "react";
import { Route, Router } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetupsPage'
import Favorites from './pages/Favorites'
import NewMeetups from './pages/NewMeetup'

const createRoutes = () => {
  <Router>
    <Route exact path="/allMeetups" component={AllMeetupsPage} />
    <Route exact path="/favorites" component={Favorites} />
    <Route exact path="/newMeetups" component={NewMeetups} />
    <Route path="/*" component={AllMeetupsPage} />
  </Router>
}

export default createRoutes