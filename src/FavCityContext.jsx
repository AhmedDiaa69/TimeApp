/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

// Create the context
export const FavoriteCityContext = createContext();

// Create the provider component
export const FavoriteCityProvider = ({ children }) => {
  const [favCityTime, setFavCityTime] = useState();
  const [favCityDate, setFavCityDate] = useState();
  const [favCityData, setFavCityData] = useState();
  const [favCityWeather, setFavCityWeather] = useState();

  const value = {
    favCityTime,
    setFavCityTime,
    favCityDate,
    setFavCityDate,
    favCityData,
    setFavCityData,
    favCityWeather,
    setFavCityWeather,
  };

  return (
    <FavoriteCityContext.Provider value={value}>
      {children}
    </FavoriteCityContext.Provider>
  );
};