export default function Extra({img, value, title}) {
  return (
    <div className="bg-(--color-top-surface) shadow-lg rounded-lg p-2 mt-2 flex flex-col items-center">
              <figure className="flex flex-col items-center">
                <img src={img} alt="humidity" className="w-8" />
                <figcaption className="text-[0.7rem] text-(--color-text-muted)">{title}</figcaption>
              </figure>
              <p>{value}</p>
            </div>
  )
}