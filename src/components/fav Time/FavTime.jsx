export default function FavTime() {
  return (
    <div
      className={`fav-time-container flex flex-col items-center justify-center w-full md:w-1/2`}
    >
      <h1 id="local-time" className="text-2xl font-bold mb-4 text-center">
        Your Favorite Time
      </h1>
      <div className="p-4 rounded-lg flex flex-row items-center justify-between w-full min-h-24 bg-(--color-surface) shadow-lg">
        <div className="text-2xl font-mono text-(--color-primary)">
          {new Date().toLocaleTimeString()}
        </div>
        <div className="text-sm text-(--color-text-muted) mt-1">
          {new Date().toLocaleDateString()},{" "}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
      </div>
    </div>
  );
}
