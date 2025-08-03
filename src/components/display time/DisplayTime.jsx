import { useState, useEffect } from "react";
import Card from "../card/Card";

export default function DisplayTime({ cityData }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  console.log(cityData);
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
    }
  }, [cityData]);

  return (
    <>
      {cityData && (
        <Card
          title={`Current time in ${cityData.city}, ${cityData.country}`}
          time={time}
          date={date}
          timeZone={cityData.timezone || "Unknown timezone"}
          className="display-time-card block w-full md:w-1/2 mx-auto p-4"
        />
      )}
    </>
  );
}
