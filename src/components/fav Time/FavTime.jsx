import Card from "../card/Card";
import { useState, useEffect } from "react";

export default function FavTime({ favCityTime, favCityDate, favCityData }) {
  const [favCities, setFavCities] = useState([]);

  useEffect(() => {
    if (!favCityData) return;

    let duplicates = favCities.some(
      (city) =>
        favCityData.city === city.data.city &&
        favCityData.province === city.data.province
    );

    if (!duplicates) {
      setFavCities((prev) => [
        ...prev,
        { time: favCityTime, date: favCityDate, data: favCityData },
      ]);
    } else {
      console.log("City already exists in favorites or no data provided.");
    }
  }, [favCityData, favCityDate, favCityTime]);

  return (
    <Card
      title={
        favCities.length > 0
          ? `Favorite City: ${favCities[favCities.length - 1].data.city}, ${
              favCities[favCities.length - 1].data.country
            }`
          : "Your Favorite Time"
      }
      className="fav-time-card"
      time={favCities[favCities.length - 1]?.time}
      date={favCities[favCities.length - 1]?.date}
      timeZone={favCities[favCities.length - 1]?.data?.timezone}
    />
  );
}
