import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
export const HEADER_HEIGHT = '64px';  // Standard Material-UI AppBar height

const initialState = {
    darkMode: true,
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { darkMode: false };
        case "DARKMODE":
            return { darkMode: true };
        default:
            return state;
    }
};

export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}