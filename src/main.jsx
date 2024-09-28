import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useThemeStore } from "./Store/useStore.js";

function Root() {
  const isDark = useThemeStore((state) => state.isDark); // Get the isDark state

  return (
    <div className={`${isDark ? "dark" : ""} `}>
      <div className="dark:bg-[#292929] lg:pl-[10%]">
        <App />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
