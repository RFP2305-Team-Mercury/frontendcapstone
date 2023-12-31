import React from "react";

export const ExpandIcon = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} data-testid="expand"
       alt="Expand" aria-label="Expand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="absolute top-0 right-0 mt-5 mr-5 w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 11-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export const LeftArrow = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} data-testid="leftArrow" alt="Left Arrow"
      aria-label="Left Arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="absolute top-1/2 left-1 transform -translate-y-1/2 w-6 h-6 bold rounded-full bg-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </>
  );
};

export const RightArrow = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} data-testid="rightArrow" alt="RightArrow" aria-label="RightArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="absolute top-1/2 right-1 transform -translate-y-1/2 w-6 h-6 bold rounded-full bg-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </>
  );
};

export const DownChevron = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="downChevron" alt="Down Chevron" aria-label="Down Chevron">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="white"
        className="w-4 h-4 justify-center absolute top-[52vh] left-10 transform -translate-y-1/2 z-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};

export const UpChevron = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="upChevron" alt="Up Chevron" aria-label="Up Chevron">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="white"
        className="w-4 h-4 justify-center absolute top-[38vh] left-10 transform -translate-y-1/2 z-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};