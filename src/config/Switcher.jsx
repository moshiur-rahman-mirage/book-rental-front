import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeChanger from "./ThemeChanger";

 
export default function Switcher() {
    const [colorTheme, setTheme] = ThemeChanger();
    const [isActive, setIsActive] = useState(false);
    const [darkSide, setDarkSide] = useState(
        colorTheme === "cupcake" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
        setIsActive(current => !current);
    };
 
    return (
        <>
            <DarkModeSwitch
                style={{
                color: isActive ? 'black' : 'white', }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}