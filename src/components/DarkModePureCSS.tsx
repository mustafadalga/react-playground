import React, { useEffect, useCallback, useState } from "react";
import './dark-mode-pure-css.css'


export default function DarkMode() {
    const [mode, setMode] = useState(
        () => localStorage.getItem("color-scheme") || "auto"
    );

    const applyTheme = useCallback(() => {
        const saved = localStorage.getItem("color-scheme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme =
            saved === "dark" ||
            (!saved && prefersDark && mode === "auto")
                ? "dark"
                : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }, [mode]);

    useEffect(() => {
        applyTheme();
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        mql.addEventListener("change", applyTheme);
        return () => mql.removeEventListener("change", applyTheme);
    }, [applyTheme]);

    const onChange = (e) => {
        const v = e.target.value;
        setMode(v);
        if (v === "auto") localStorage.removeItem("color-scheme");
        else localStorage.setItem("color-scheme", v);
        applyTheme();
    };

    return (
        <div className="app">
            <h1>Hello Darkness, My Old Friend</h1>
            <p>
                <strong>WARNING!</strong> This demo uses{" "}
                <code>@container style()</code> and <code>:has</code>. Only in latest
                Chrome.
            </p>
            <fieldset className="toggle-group" id="colorScheme">
                <label>
                    <input
                        type="radio"
                        name="color-scheme"
                        id="color-scheme-light"
                        value="light"
                        checked={mode === "light"}
                        onChange={onChange}
                        data-sr
                    />
                    Light
                </label>
                <label>
                    <input
                        type="radio"
                        name="color-scheme"
                        value="auto"
                        checked={mode === "auto"}
                        onChange={onChange}
                        data-sr
                    />
                    Auto
                </label>
                <label>
                    <input
                        type="radio"
                        name="color-scheme"
                        id="color-scheme-dark"
                        value="dark"
                        checked={mode === "dark"}
                        onChange={onChange}
                        data-sr
                    />
                    Dark
                </label>
            </fieldset>
            <div>
                <span style={{ color: "red" }}>This is red in both modes.</span>
            </div>
        </div>
    );
}
