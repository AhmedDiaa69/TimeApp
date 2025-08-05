export default function Card({ title, time, date, timeZone, className }) {
  return (
    <div
      className={`fav-time-container flex flex-col items-center justify-center w-full md:w-1/2 ${className}`}
    >
      <h1 id="title" className="text-2xl font-bold mb-4 text-center">
        {title}
      </h1>
      <div
        className={`p-4 rounded-lg flex flex-row items-center justify-between w-full min-h-24 bg-(--color-surface) shadow-lg ${
          time || date || timeZone ? "" : "border-dashed border-4 border-(--color-border)"
        }`}
      >
        <div className="text-2xl font-mono text-(--color-primary)">
          {time ? time : "00:00:00"}
        </div>
        <div className="text-sm text-(--color-text-muted) mt-1 text-right">
          {date ? date : "00-00-00"}, {timeZone ? timeZone : "UTC"}
        </div>
      </div>
    </div>
  );
}
