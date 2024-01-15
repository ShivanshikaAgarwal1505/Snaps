import { useState } from "react";
import React from "react";

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event) => {
    setHasInputValue(event.target.value.length > 0);
  };
  return (
    <form className="form">
      <label htmlFor="search">
        <input
          required
          autoComplete="off"
          placeholder="search your chats"
          id="search"
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
        <div className="icon">
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`swap-${isInputFocused || hasInputValue ? "off" : "on"}`}
          >
            <path
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`swap-${isInputFocused || hasInputValue ? "on" : "off"}`}
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <button
          type="reset"
          className="close-btn"
          style={{ opacity: hasInputValue ? 1 : 0 }}
        >
          <svg
            viewBox="0 0 20 20"
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </label>
    </form>
  );
};

export default Search;
