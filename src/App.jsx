import React, {useState, useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider"; 
import ThemeButton from "./ThemeButton";
import { ThemeProvider } from "./context/Theme";

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const lightMode=()=>{
    setThemeMode("light")
  }
  const darkMode=()=>{
    setThemeMode("dark")
  }

useEffect(() => {
  const switcher =document.querySelector('html').classList;
  switcher.remove("light","dark");
  switcher.add(themeMode)
}, [themeMode])



  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="bg-gradient-to-b from-[#c47b79ce] to-[#864af5b7] w-full h-full overflow-y-auto pb-20 dark:bg-gradient-to-b dark:from-[#141414] dark:to-[#302f2f]">
      <ThemeButton/>
      <TestimonialSlider />
    </div>
    </ThemeProvider>
  );
}

export default App;