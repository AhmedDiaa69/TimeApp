export default function Navbar() {
  return (
    <>
      <nav
        className="navbar flex justify-between items-center bg-(--color-surface) sticky top-0 p-4 shadow-(--shadow-lg)"
        data-aos="fade-down"
      >
        <div className="navbar__logo">
          <h1 className="text-2xl font-bold">
            Time<span className="text-(--color-primary)">App</span>
          </h1>
        </div>
      </nav>
    </>
  );
}
