import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import { useStores } from "./util-hooks/useStores";

function App() {
  const [meetups, setMeetups] = useState([])
  const [faves, setFaves] = useState([])
  const { meetupStore, userStore } = useStores()
  const { getMeetups, createMeetup } = meetupStore
  const { getUser } = userStore
  async function Start() {
    let meetups = await getMeetups()
    setMeetups(meetups)
    let user = await getUser('641d6168e0d76eeaf30b030c')
    setFaves(user.favorites)
  }
  useEffect(() => {
    Start()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.favorites])

  return (
    <div data-test="app">
      <Router>
        <MainNavigation favorites={faves} />
        <Layout>
          <Routes>
            <Route path="favorites" element={<FavoritesPage meetups={meetups} favorites={faves} />}/>
            <Route path="newMeetup" element={<NewMeetupsPage meetups={meetups} createMeetup={createMeetup} setMeetups={setMeetups}/>}/>
            <Route path="allMeetups" element={<AllMeetupsPage meetups={meetups} favorites={faves} />}/>
            <Route path="*" element={<Navigate to="allMeetups" />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
