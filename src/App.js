import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useState } from "react";

function App() {
  const [meetups, setMeetups] = useState([])

  return (
    <div data-test="app">
      <Router>
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path="favorites" element={<FavoritesPage />}/>
            <Route path="newMeetup" element={<NewMeetupsPage meetups={meetups} setMeetups={setMeetups}/>}/>
            <Route path="allMeetups" element={<AllMeetupsPage />}/>
            <Route path="*" element={<Navigate to="allMeetups" />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
