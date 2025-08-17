import Card from "../card/Card";
import { useState, useEffect } from "react";

export default function FavTime({ favCityTime, favCityDate, favCityData, favCityWeather }) {
  const [favCities, setFavCities] = useState([]);
  const [CIndex, setCIndex] = useState(0);

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
        { time: favCityTime, date: favCityDate, data: favCityData, weather: favCityWeather },
      ]);
    } else {
      console.log("City already exists in favorites or no data provided.");
    }
  }, [favCityData, favCityDate, favCityTime, favCityWeather]);

  return (
    <Card
      title={
        favCities.length > 0
          ? `Favorite City: ${favCities[CIndex].data.city}, ${favCities[CIndex].data.country}`
          : "Your Favorite Time"
      }
      className="fav-time-card"
      time={favCities[CIndex]?.time}
      date={favCities[CIndex]?.date}
      timeZone={favCities[CIndex]?.data?.timezone}
      weather={favCities[CIndex]?.weather}
      onClickRight={() =>
        setCIndex((prev) => (prev < favCities.length - 1 ? prev + 1 : prev))
      }
      onClickLeft={() => setCIndex((prev) => (prev > 0 ? prev - 1 : prev))}
      displayNav={favCities.length > 1}
    />
  );
}
