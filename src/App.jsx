import React from "react";
import TestimonialSlider from "./TestimonialSlider"; 
import ThemeButton from "./ThemeButton";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#c47b79ce] to-[#864af5b7] w-full h-full overflow-y-auto pb-20 dark:bg-gradient-to-b dark:from-[#4e4c4c] dark:to-[#000000b7]">
      <ThemeButton/>
      <TestimonialSlider />
    </div>
  );
}

export default App;