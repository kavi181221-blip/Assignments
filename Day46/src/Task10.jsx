import { useEffect, useState } from "react";

function Task10() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Save theme to localStorage & apply to body
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h3>Theme Switcher</h3>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Task10;
