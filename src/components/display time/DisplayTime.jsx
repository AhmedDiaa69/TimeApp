import "./DiaplayTime.css";
import { useState, useEffect } from "react";

export default function DisplayTime({ cityData }) {
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  console.log(cityData);
  const APIKey = "w+0ZWNiXLMg6rgIFDveRzg==i3UnLOpOMIQP7pDC";

  useEffect(() => {
    if (cityData && cityData.timezone) {
      console.log(`Fetching time for timezone: ${cityData.timezone}`);
      fetch(
        `https://api.api-ninjas.com/v1/worldtime?timezone=${cityData.timezone}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": APIKey,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! worldtime status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setTime(new Date(data.datetime).toLocaleTimeString());
          setDate(new Date(data.datetime).toLocaleDateString());
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
        <>
          <h1 className="text-center text-2xl font-bold mb-4">
            Current time in {cityData.city}, {cityData.country}
          </h1>
          <div className="p-4 rounded-lg flex flex-row items-center justify-between w-full min-h-24 bg-(--color-surface) shadow-lg">
            <div className="text-2xl font-mono text-(--color-primary)">
              {Time}
            </div>
            <div className="text-sm text-(--color-text-muted) mt-1">
              {date},{" "}
              {cityData.timezone ? cityData.timezone : "Unknown timezone"}
            </div>
          </div>
        </>
      )}
    </>
  );
}
