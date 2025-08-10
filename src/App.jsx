import "./App.css";

import Navbar from "./components/navbar/Navbar";
import LocalTime from "./components/local time/LocalTime";
import FavTime from "./components/fav Time/FavTime";
import SearchBar from "./components/search bar/SearchBar";
import { Analytics } from "@vercel/analytics/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const [favCityTime, setFavCityTime] = useState();
  const [favCityDate, setFavCityDate] = useState();
  const [favCityTimeZone, setFavCityTimeZone] = useState();

  return (
    <>
      <Navbar />
      <div className="hero flex flex-col md:flex-row w-full gap-8 p-4">
        <LocalTime />
        <FavTime
          cityTime={favCityTime}
          cityDate={favCityDate}
          cityTimeZone={favCityTimeZone}
        />
      </div>
      <SearchBar
        setCityTime={setFavCityTime}
        setCityDate={setFavCityDate}
        setCityTimeZone={setFavCityTimeZone}
      />
      <Analytics />
    </>
  );
}

export default App;
