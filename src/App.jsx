import "./App.css";

import Navbar from "./components/navbar/Navbar";
import LocalTime from "./components/local time/LocalTime";
import FavTime from "./components/fav Time/FavTime";
import SearchBar from "./components/search bar/SearchBar";
import TimeDisplay from "./components/display time/DisplayTime";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  return (
    <>
      <Navbar />
      <div className="hero flex flex-col md:flex-row w-full gap-8 p-4">
        <LocalTime />
        <FavTime />
      </div>
      <SearchBar />
      <TimeDisplay />
    </>
  );
}

export default App;
