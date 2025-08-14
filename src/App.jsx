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

  const [isDark, setIsDark] = useState(false);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      document.documentElement.setAttribute(
        "data-theme",
        e.matches ? "dark" : "light"
      );
    });

  function initTheme() {
    const html = document.documentElement;
    if (!html.hasAttribute("data-theme")) {
      const prefTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setIsDark(prefTheme === "dark");
      html.setAttribute("data-theme", prefTheme);
    }
  }

  initTheme();

  const [favCityTime, setFavCityTime] = useState();
  const [favCityDate, setFavCityDate] = useState();
  const [favCityData, setFavCityData] = useState();

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className="hero flex flex-col md:flex-row w-full gap-8 p-4">
        <LocalTime />
        <FavTime
          favCityTime={favCityTime}
          favCityDate={favCityDate}
          favCityData={favCityData}
        />
      </div>
      <SearchBar
        setFavCityTime={setFavCityTime}
        setFavCityDate={setFavCityDate}
        setFavCityData={setFavCityData}
      />
      <Analytics />
    </>
  );
}

export default App;
