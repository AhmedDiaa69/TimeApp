import "./Searchbar.css";
import React, { useState } from "react";
import cityTimezones from "city-timezones";

export default function Searchbar() {
  const [city, setCity] = useState("");
  const results = cityTimezones.findFromCityStateProvince(city);

  console.log(results);
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">Search for a City</h1>
      <p className="text-center text-gray-600 mb-6">
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
          />
          <button className="search-button text-(--color-text) bg-(--color-primary) hover:bg-(--color-primary-hover) active:bg-(--color-primary-active) transition-all duration-300 font-bold py-2 px-4 rounded-lg ml-2 shadow-sm">
            Search
          </button>
        </div>
        {results.length > 0 && (
          <ul className="search-results list-none p-4 absolute w-full md:w-1/2 left-1/2 transform -translate-x-1/2 h-full overflow-y-auto z-50 max-h-28 top-full bg-(--color-surface) border border-(--color-border) shadow-lg rounded-lg">
            {results.map((city, i) => (
              <li
                key={i}
                className="search-result-item flex justify-between p-2 hover:bg-(--color-primary-hover) transition-all duration-300 rounded-lg"
                onClick={() => {
                  setCity(`${city.city}, ${city.country}`);
                }}
              >
                {city.city}, {city.country} <span className=" text-(--color-text-h-muted)">{city.timezone}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
