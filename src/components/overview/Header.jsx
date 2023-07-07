import React, {useState} from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex bg-gray-700 text-gray-200 m-auto justify-between items-center dark:bg-gray-500 dark:text-gray-800">
      <h1 className="text-3xl font-bold ml-28 my-3 text-left italic">
        The Mercury Store
      </h1>
      <div className="flex flex-row">
        <div className="text-3xl font-thin flex flex-row mr-8 my-3">
          _________
          <svg
            className="stroke-gray-300 w-6 h-6 ml-2 self-center dark:stroke-gray-800"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g className="search-path" fill="none">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </div>
        <div className="mr-8 mt-3 self-center">
          <label className="relative inline-flex items-center cursor-pointer mr-14">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-300 dark:text-gray-800">Dark Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
}
