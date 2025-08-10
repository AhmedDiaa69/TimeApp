export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-(--color-text) bg-(--color-primary) hover:bg-(--color-primary-hover) active:bg-(--color-primary-active) transition-all duration-300 font-bold py-2 px-4 rounded-lg ml-2 shadow-sm ${className}`}
    >
      {children}
    </button>
  );
}
