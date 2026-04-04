import { useEffect, useState } from "react";

const ThemeToggle = () => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } 
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);


  return (

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-white dark:text-black transition"
    >

      {darkMode ? "☀ Light" : "🌙 Dark"}

    </button>

  );

};

export default ThemeToggle;