import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../../context/DarkModeContext";

function ToggleTheme() {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900 cursor-pointer" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900 cursor-pointer" />
      )}
    </button>
  );
}

export default ToggleTheme;
