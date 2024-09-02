import React from 'react'
import useTheme from './context/Theme'

function ThemeButton() {

    const {themeMode,darkMode,lightMode}=useTheme();

    const handleOnChange=(e)=>{
        const darkStatus=e.currentTarget.checked;
        if(darkStatus){
            darkMode()
        }else{
            lightMode()
        }
    }

  return (
    <label className="relative inline-flex items-center cursor-pointer float-right mx-4 mt-3">
    <input
        type="checkbox"
        value=""
        onChange={handleOnChange}
        checked={themeMode==="dark"}
        className="sr-only peer"
    />
    <div className="w-11 h-6 bg-purple-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-800">

    </div>
    <span className="ml-3 text-sm font-medium text-orange-950 dark:text-purple-300">Toggle Theme</span>
</label>
  )
}

export default ThemeButton