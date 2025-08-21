import React from "react";

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggle }) => {
  return (
    <header>
      <div className="logo" id="title">
        <h1>Timeline App</h1>
      </div>
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={onToggle}
        />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default Header;
