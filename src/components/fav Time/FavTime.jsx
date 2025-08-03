import Card from "../card/Card";

export default function FavTime() {
  return (
    <Card
      title={"Your Favorite Time Information"}
      time={new Date().toLocaleTimeString(
        "en-US",
        { hour: "2-digit", minute: "2-digit", second: "2-digit" },
        { hour12: true }
      )}
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
