'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'


function lightmodebutton() {
    const {theme , setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null; // Avoid SSR issues
    
  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default lightmodebutton