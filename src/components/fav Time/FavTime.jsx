import Card from "../card/Card";

export default function FavTime({ favCityTime, favCityDate, favCityTimeZone }) {
  return (
    <Card
      title={"Your Favorite Time Information"}
      className="fav-time-card"
      time={favCityTime}
      date={favCityDate}
      timeZone={favCityTimeZone}
    />
  );
}
