import React, { createContext, useEffect, useState } from 'react';

// Create a context object
export const StateContext = createContext(false);

// Wrap your component tree in a provider component
const ThemeModeStateProvider = ({ children }) => {
    // localStorage.setItem("themeMode",false)
    let getItem=localStorage.getItem("themeMode")
    if(getItem == true){
        getItem = false;
    }
  const [darkmodeToggler, setDarkmodeToggler] = useState(!getItem);
  useEffect(()=>{

    localStorage.setItem("themeMode",darkmodeToggler)
    return (
        ()=>{         
            localStorage.removeItem("themeMode")}
    )
  },[darkmodeToggler])

  return (
    <StateContext.Provider value={{ darkmodeToggler, setDarkmodeToggler }}>
      {children}
    </StateContext.Provider>
  );
};

export default ThemeModeStateProvider;
