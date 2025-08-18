import { useState, useEffect } from "react";
import Card from "../card/Card";

export default function LocalTime() {
  const [localTime, setLocalTime] = useState("");
  const [message, setMessage] = useState("");

  // Update local time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString(
          "en-US",
          { hour: "2-digit", minute: "2-digit", second: "2-digit" },
          { hour12: true }
        )
      );
      setMessage(now.getHours() < 12 ? "Good morning!" : "Good evening!");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const [weather, setWeather] = useState({
    humidity: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    wind_speed: "",
    feels_like: "",
    description: "",
    pressure: "",
    icon: "",
  });

  const [city, setCity] = useState();

  useEffect(() => {
    const updateWeather = () => {
      const myHeaders = new Headers();

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      // it fetches the location fist and then fetched the weather
      fetch(
        "https://api.ipgeolocation.io/v2/ipgeo?apiKey=9ac18a62ee9b400aa10a235c2ea6e821",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.location.city);
          setCity(result.location.city);
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${result.location.city}&appid=dcd306ba4c8502fc4d164db188fdcca3&units=metric`
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
                wind_speed: data.wind.speed,
                visibility: data.visibility,
                feels_like: data["main"]["feels_like"],
                description: data["weather"][0].description,
                pressure: data["main"]["pressure"],
                icon: data["weather"][0].icon,
              });
            })
            .catch((error) => {
              console.error(error);
              setWeather({
                ...weather,
                humidity: 0,
                temp: 0,
                temp_min: 0,
                temp_max: 0,
                wind_speed: 0,
                visibility: 0,
                feels_like: 0,
                description: 0,
                pressure: 0,
                icon: "03n",
              });
            });
        })
        .catch((error) => {
          console.error(error);
          setWeather({
            ...weather,
            humidity: 0,
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            wind_speed: 0,
            visibility: 0,
            feels_like: 0,
            description: 0,
            pressure: 0,
            icon: "03n",
          });
        });
    };

    updateWeather();

    const interval = setInterval(updateWeather, 300000);

    return () => clearInterval(interval);
  }, [city]);

  return (
    <Card
      title={message}
      time={localTime}
      date={new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      weather={weather}
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      className="local-time-card"
    />
  );
}
