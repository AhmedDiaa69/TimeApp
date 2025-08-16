import { useState, useEffect } from "react";
import Card from "../card/Card";
import Button from "../button/Button";

export default function DisplayTime({
  cityData,
  setFavCityTime,
  setFavCityDate,
  setFavCityData,
}) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState({
    humidity: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    feels_like: "",
    description: "",
    pressure: "",
    icon: "",
  });

  const APIKey = "9ac18a62ee9b400aa10a235c2ea6e821";

  useEffect(() => {
    if (cityData && cityData.timezone) {
      fetch(
        `https://api.ipgeolocation.io/v2/timezone?apiKey=${APIKey}&tz=${cityData.timezone}`,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! worldtime status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("worldtime data:", data);
          setTime(data.time_zone.time_12);
          setDate(
            new Date(data.time_zone.date_time).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
        })
        .catch((error) => {
          console.error("Error fetching time data:", error);
          setTime("Error fetching time");
          setDate("Unknown date");
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityData.city}&appid=dcd306ba4c8502fc4d164db188fdcca3&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeather({
            ...weather,
            humidity: data["main"]["humidity"],
            temp: data["main"]["temp"],
            temp_min: data["main"]["temp_min"],
            temp_max: data["main"]["temp_max"],
            feels_like: data["main"]["feels_like"],
            description: data["weather"][0].description,
            pressure: data["main"]["pressure"],
            icon: data["weather"][0].icon,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [cityData]);

  return (
    <>
      {cityData && (
        <section className="display-time-section flex flex-col items-center">
          <Card
            title={`Current time in ${cityData.city}, ${cityData.country}`}
            time={time}
            date={date}
            timeZone={cityData.timezone || "Unknown timezone"}
            weather={weather}
            className="display-time-card block w-full md:w-1/2 mx-auto p-4"
          />
          <Button
            className="mt-4"
            onClick={() => {
              setFavCityTime(time);
              setFavCityDate(date);
              setFavCityData(cityData);
            }}
          >
            Add to Favorites
          </Button>
        </section>
      )}
    </>
  );
}
