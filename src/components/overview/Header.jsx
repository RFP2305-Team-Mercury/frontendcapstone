import React from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className='flex bg-gray-700 text-gray-200 m-auto justify-between items-center'>
      <h1 className="text-3xl font-bold ml-28 my-3 text-left italic">The Mercury Store</h1>
      <div className="text-3xl font-thin flex flex-row mr-28 my-3">_________
        <svg className="stroke-gray-300 w-6 h-6 ml-2 self-center" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g className="search-path" fill="none">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
              <circle cx="8" cy="8" r="7"/>
            </g>
        </svg>
      </div>
      <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
    </div>
      )
}