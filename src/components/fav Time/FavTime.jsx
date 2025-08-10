import Card from "../card/Card";

export default function FavTime({ cityTime, cityDate, cityTimeZone }) {
  return (
    <Card
      title={"Your Favorite Time Information"}
      className="fav-time-card"
      time={cityTime}
      date={cityDate}
      timeZone={cityTimeZone}
    />
  );
}
