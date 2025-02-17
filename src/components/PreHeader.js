import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const PreHeader = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-customLavender dark:bg-darkBg text-customPlum dark:text-darkText py-2 px-4 text-lg font-semibold tracking-wide flex items-center justify-between border-t-2 dark:border-t-0 sticky top-0 z-50">
      <div></div>
      {/* Text Content */}
      <span className="font-playfair text-xs md:text-sm lg:text-base text-center">
      Welcome to <strong>Clofer:</strong>
      <br className="sm:hidden block" /> {/* Line break only on small screens */}
      Where Tradition Meets Contemporary Elegance.
    </span>


      {/* Dark Mode Toggle Button */}
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="p-2 sm:p-2 md:p-2.5 rounded-full bg-customPlum dark:bg-darkAccent text-white dark:text-darkBg transition-all duration-300 mr-2 md:mr-4"
>
  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
</button>

    </div>
  );
};

export default PreHeader;
