import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  let [instaColor, setInstaColor] = useState('secondary')
  let [twitterColor, setTwitterColor] = useState('secondary')
  let [gitColor, setGitColor] = useState('secondary')
  
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
    <div className="d-flex justify-content-between p-4 px-5">            
        <span className="">© 2024 <Link to="/" className="text-decoration-none text-dark">ShoppingCart</Link>. All Rights Reserved.</span>
        <div className="">
            <Link to="/" target="_blank" rel="noreferrer" className={` mx-3 text-${instaColor}`} onMouseEnter={()=>setInstaColor('dark')} onMouseLeave={()=>setInstaColor('secondary')}>
                <i class="bi bi-instagram"></i>
            </Link>
            <Link to="/" target="_blank" rel="noreferrer" className={` mx-3 text-${twitterColor}`} onMouseEnter={()=>setTwitterColor('dark')} onMouseLeave={()=>setTwitterColor('secondary')}>
            <i class="bi bi-twitter"></i>
            </Link>
            <Link to="/" target="_blank" rel="noreferrer" className={` mx-3 text-${gitColor}`} onMouseEnter={()=>setGitColor('dark')} onMouseLeave={()=>setGitColor('secondary')}>
            <i class="bi bi-github"></i>
            </Link>
        </div>
    </div>
</footer>
  )
}
