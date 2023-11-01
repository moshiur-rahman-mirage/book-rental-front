
import { useState, useEffect } from "react";
 
export default function ThemeChanger() {
    const [theme, setTheme] = useState('garden');
    const colorTheme = theme === "dark" ? "garden" : "dark";
 
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        document.querySelector('html').setAttribute('data-theme',colorTheme)
    }, [theme, colorTheme]);
 
    return [colorTheme, setTheme]
}