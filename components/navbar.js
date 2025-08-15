"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md sm:py-6 py-4 shadow-lg z-50">
      <div className="container mx-auto px-20 flex justify-between items-center">
        {/* لوگو */}
        <div className="flex items-center">
         <span className="sm:text-2xl text-lg font-bold tracking-wide bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 text-transparent bg-clip-text relative 
             before:content-[''] before:absolute before:inset-0 before:rounded  before:blur-[2px] before:-z-10 
             drop-shadow-[2px_2px_6px_rgba(0,0,50,0.5)]">alipourweb</span>
        </div>

        {/* لینک‌ها - دسکتاپ */}
        <div className="hidden md:flex flex-row-reverse gap-x-10">
          <a href="#home" className="text-white hover:text-blue-400 transition vazir">home</a>
          <a href="#about" className="text-white hover:text-blue-400 transition vazir">about</a>
          <a href="#services" className="text-white hover:text-blue-400 transition vazir">services</a>
          <a href="#portfolio" className="text-white hover:text-blue-400 transition vazir">portfolio</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition vazir">contact</a>
        </div>

        {/* دکمه همبرگری - موبایل */}
        <button
          className="sm:hidden text-gray-300 focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
           aria-label="Toggle menu"
         >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* منوی موبایل - راست‌چین و از راست وارد می‌شود */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-black/90 backdrop-blur-md text-white py-6 px-6 flex flex-col items-end gap-6 animate-fade-down vazir text-right">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>about</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>portfolio</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>contact</a>
        </div>
      )}
    </nav>
  );
}
