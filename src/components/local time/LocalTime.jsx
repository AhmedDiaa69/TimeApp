import "./LocalTime.css";
import { useState, useEffect } from "react";

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
    <div
      className={`fav-time-container flex flex-col items-center justify-center w-full md:w-1/2`}
    >
      <h1 id="local-time" className="text-2xl font-bold mb-4 text-center">
        Your Local Time
      </h1>
      <div className="p-4 rounded-lg flex flex-row items-center justify-between w-full min-h-24 bg-(--color-surface) shadow-lg">
        <div className="text-2xl font-mono text-(--color-primary)">
          {localTime}
        </div>
        <div className="text-sm text-(--color-text-muted) mt-1">
          {new Date().toLocaleDateString()},{" "}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
      </div>
    </div>
  );
}
