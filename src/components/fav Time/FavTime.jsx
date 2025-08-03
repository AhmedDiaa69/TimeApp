import Card from "../card/Card";

export default function FavTime() {
  return (
    <Card
      title={"Local Time Information"}
      time={new Date().toLocaleTimeString()}
      date={new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      className="fav-time-card"
    />
  );
}
