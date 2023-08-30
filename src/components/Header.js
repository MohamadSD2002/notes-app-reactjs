import React from "react";

const Header = ({ handleSetDarkMode,handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
            handleSetDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {handleDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
