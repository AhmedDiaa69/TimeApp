# Time App

A modern React application built with Vite to display the current local time, search for the time in any city worldwide, and manage a favorite city for quick reference.

---

## Features

- **Local Time Display:** Shows your current time, date, and timezone.
- **City Search:** Search for any city to view its current time and timezone.
- **Favorite City:** Save a city's time as your favorite for quick access.
- **Responsive Design:** Works well on both desktop and mobile.
- **Animated UI:** Smooth transitions and animations using AOS.
- **Analytics:** Tracks usage with Vercel Analytics.

---

## Project Structure

```
public/
  timer.svg
  vite.svg
src/
  App.jsx                # Main app component
  main.jsx               # Entry point, renders App
  index.css              # Global styles and CSS variables
  App.css                # App-specific styles
  components/
    button/
      Button.jsx         # Reusable button component
    card/
      Card.jsx           # Card UI component for displaying time info
    display time/
      DisplayTime.jsx    # Shows time for a searched city
    fav Time/
      FavTime.jsx        # Displays favorite city's time
    local time/
      LocalTime.jsx      # Displays local time
    navbar/
      Navbar.jsx         # Top navigation bar
    search bar/
      SearchBar.jsx      # Search input for cities
```

---

## Getting Started

This project uses [Vite](https://vitejs.dev/) for fast development and [React](https://react.dev/) for building the UI.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/time-app.git
   cd time-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

---

## Technologies & Packages Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [city-timezones](https://www.npmjs.com/package/city-timezones) - For city and timezone data
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For UI animations

---

## API Used

- [ipgeolocation](https://app.ipgeolocation.io/)  
  Used to fetch the current time and timezone information for searched cities.

---

## License

This project is licensed under the MIT License.

---

## Credits

Created by Ahmed Diaa.  
Inspired by modern time and timezone
