//import { useState } from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
//import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  //const [page, setPage] = useState(ALL_MEETUP_PAGE);

  /* function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  } */

  return (
    <div data-test="app">
      <Router>
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path="allMeetups" element={<AllMeetupsPage />}/>
            <Route path="favorites" element={<FavoritesPage />}/>
            <Route path="newMeetup" element={<NewMeetupsPage />}/>
            <Route path="" element={<AllMeetupsPage />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
