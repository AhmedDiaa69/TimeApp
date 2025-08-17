import { useState } from "react";
import cityTimezones from "city-timezones";
import DisplayTime from "../display time/DisplayTime.jsx";
import Button from "../button/Button.jsx";

export default function SearchBar({
  setFavCityTime,
  setFavCityDate,
  setFavCityData,
  setFavCityWeather,
}) {
  const [city, setCity] = useState("");
  const results = cityTimezones.findFromCityStateProvince(city);
  let [selectedCity, setSelectedCity] = useState("");

  function sendTimeZone() {
    if (results.length > 0) {
      setSelectedCity(results[0]);
      console.log(`search, Selected timezone: ${results[0].timezone}`);
    } else {
      console.log("search, No results found for the given city.");
      return;
    }
  }

  console.log(results);
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">Search for a City</h1>
      <p className="text-center text-gray-600 mb-6 pl-2 pr-2">
        Find the local time for any city around the world.
      </p>
      <div className="relative">
        <div className="search-bar flex justify-center items-center p-4">
          <input
            type="text"
            name="city"
            id="search"
            value={city}
            placeholder="Search for a city..."
            className="search-input w-full md:w-1/2 bg-(--color-surface) border border-(--color-border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all duration-300 rounded-lg p-2 shadow-sm"
            onChange={(e) => setCity(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendTimeZone();
                setCity("");
              }
            }}
          />
          <Button
            onClick={() => {
              sendTimeZone();
              setCity("");
            }}
            className="search-button"
          >
            Search
          </Button>
        </div>
        {results.length > 0 && (
          <ul className="search-results list-none p-4 absolute w-full md:w-1/2 left-1/2 transform -translate-x-1/2 overflow-y-auto z-50 max-h-28 top-full bg-(--color-surface) border border-(--color-border) shadow-lg rounded-lg">
            {results.slice(0, 20).map((city, i) => (
              <li
                key={i}
                className="search-result-item flex justify-between p-2 hover:bg-(--color-primary-hover) transition-all duration-300 rounded-lg"
                onClick={() => {
                  setSelectedCity(city);
                  setCity("");
                }}
              >
                {city.city}, {city.province}, {city.country}{" "}
                <span className=" text-(--color-text-h-muted)">
                  {city.timezone}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedCity && (
        <DisplayTime
          cityData={selectedCity}
          setFavCityTime={setFavCityTime}
          setFavCityDate={setFavCityDate}
          setFavCityData={setFavCityData}
          setFavCityWeather={setFavCityWeather}
        />
      )}
    </>
  );
}
