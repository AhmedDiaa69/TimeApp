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
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      className="local-time-card"
    />
  );
}
