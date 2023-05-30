import { useState } from "react";
import "./ToggleButton.css";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export default function ToggleButton() {
  const [mode, setMode] = useState("dark");
  return (
    <span className="t-btn">
      <DarkModeToggle
        mode={mode}
        
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={(mode) => {
          setMode(mode);
        }}
      />
    </span>
  );
}
