import Card from "../card/Card";

export default function FavTime({ favCityTime, favCityDate, favCityData }) {
  return (
    <Card
      title={favCityData ? `Favorite City: ${favCityData.city}, ${favCityData.country}` : "Your Favorite Time"}
      className="fav-time-card"
      time={favCityTime}
      date={favCityDate}
      timeZone={favCityData?.timezone}
    />
  );
}
