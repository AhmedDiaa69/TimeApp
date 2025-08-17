import humidity from "../../assets/humidity.svg";
import pressure from "../../assets/pressure.svg";
import visibility from "../../assets/visibility.svg";
import wind from "../../assets/wind.svg";
import Extra from "./Extra";

export default function Weather({ weather }) {
  let extra = [
    {
      img: humidity,
      value: Math.round(weather.humidity) + " %",
      title: "Humidity",
    },
    {
      img: pressure,
      value: Math.round(weather.pressure) + " hPa",
      title: "Pressure",
    },
    {
      img: visibility,
      value: weather.visibility / 1000 + " km",
      title: "Visibility",
    },
    {
      img: wind,
      value: weather.wind_speed+" m/s",
      title: "Wind Speed",
    },
  ];

  return (
    <section id="weather_report" className="w-full flex flex-col items-center">
      <figure className="">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
          className="w-28"
        />
      </figure>
      <span className="text-2xl font-bold text-(--color-primary)">
        {Math.round(weather.temp)}°C
      </span>
      <div className="flex flex-row gap-8 flex-wrap justify-center items-center">
      {
        extra.map((ext) =>(
          <Extra title={ext.title} img={ext.img} value={ext.value} />
        ))
      }
      </div>
    </section>
  );
}
