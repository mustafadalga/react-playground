// src/App.jsx
import React, { useEffect } from "react";

function setTheme() {
    const ls = localStorage.theme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(prefersDark)
    const isDark = ls === "dark" || (!("theme" in localStorage) && prefersDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
}

function ThemeToggle() {
    const toggle = (mode) => {
        if (mode === "system") localStorage.removeItem("theme");
        else localStorage.theme = mode;
        setTheme();
    };

    return (
        <div className="flex gap-2 text-lime-400">
            <button onClick={() => toggle("light")}>Light</button>
            <button onClick={() => toggle("dark")}>Dark</button>
            <button onClick={() => toggle("system")}>System</button>
        </div>
    );
}

export default function DarkModeTailwindCss() {
    useEffect(() => {
        setTheme();
        // respond to OS-level changes
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        mql.addEventListener("change", setTheme);
        return () => mql.removeEventListener("change", setTheme);
    }, []);

    return (
        <div className="p-4 space-y-4 dark:bg-black">
            <ThemeToggle/>
            <span className="text-red-500 dark:text-lime-400">
        Karşıt renk
      </span>



        </div>
    );
}
