import { useState, useEffect } from "react";
import Card from "../card/Card";

export default function LocalTime() {
  const [localTime, setLocalTime] = useState("");

  // Update local time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      title={"Local Time Information"}
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
