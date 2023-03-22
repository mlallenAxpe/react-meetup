import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useFetch } from "./util-hooks/useFetch";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";

function App() {
  const dataFavorites = useFetch({
    url: "/favorites.json",
  })
  const dataMeetups = useFetch({
    url: "/data.json",
  })
  const [meetups, setMeetups] = useState(null)
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    setMeetups(dataMeetups)
  }, [dataMeetups])
  useEffect(() => {
    setFavorites(dataFavorites)
  }, [dataFavorites])
  
  return (
    <div data-test="app">
      <Router>
        <MainNavigation favorites={favorites ? favorites.length : 0}/>
        <Layout>
          <Routes>
            <Route path="favorites" element={<FavoritesPage favorites={favorites} meetups={meetups} setFavorites={setFavorites}/>}/>
            <Route path="newMeetup" element={<NewMeetupsPage meetups={meetups} setMeetups={setMeetups}/>}/>
            <Route path="allMeetups" element={<AllMeetupsPage meetups={meetups} favorites={favorites} setFavorites={setFavorites}/>}/>
            <Route path="*" element={<Navigate to="allMeetups" />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
