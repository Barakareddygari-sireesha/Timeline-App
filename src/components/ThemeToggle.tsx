import React from "react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <div className="theme-container">
      <label className="theme-toggle">
        <input type="checkbox" checked={isDark} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
