import React from "react";
import "./src/styles/global.css"
import ThemeModeStateProvider  from "./src/context-store/ContextProvider"
// import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
<ThemeModeStateProvider>{element}</ThemeModeStateProvider>
  
)