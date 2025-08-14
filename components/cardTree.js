 'use client'
import React from 'react'
import styles from '@/styles/card.module.css'
function CardTree() {
  return (
    <div >
      <div className="relative w-full h-screen bg-[#0a0d3a] flex items-center justify-center">
  <svg 
    width="1900" 
    height="700" 
    viewBox="0 0 1900 700" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bootom-[50px]" // اینجا با تغییر top جای هلال رو تنظیم می‌کنی
  >
    <defs>
   
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0da8d8"/>
        <stop offset="50%" stop-color="#ddf1f5"/>
        <stop offset="100%" stop-color="#0da8d8"/>
      </linearGradient>
    
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
   
    <path 
      d="M 0 350 A 950 350 0 0 1 1900 350" 
      stroke="url(#neonGradient)" 
      stroke-width="20" 
      fill="none" 
      filter="url(#neonGlow)" 
    />
  </svg>
</div>



</div>
 
    
  )
}

export default CardTree