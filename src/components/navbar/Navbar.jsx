import "@theme-toggles/react/css/InnerMoon.css"
import { InnerMoon } from "@theme-toggles/react"

export default function Navbar({ isDark, setIsDark }) {
  function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setIsDark(newTheme === "dark");
    html.setAttribute("data-theme", newTheme);
  }

  return (
    <>
      <nav
        className="navbar flex justify-between items-center bg-(--color-surface) sticky top-0 p-4 shadow-(--shadow-lg) z-50"
        data-aos="fade-down"
      >
        <div className="navbar__logo">
          <h1 className="text-2xl font-bold">
            Time<span className="text-(--color-primary)">App</span>
          </h1>
        </div>
        <InnerMoon duration={300} className="text-3xl" onToggle={toggleTheme} toggled={isDark} />
      </nav>
    </>
  );
}
