// components/Footer.jsx
'use client';

export default function Footer() {
  return (
    <footer className=" border-t bg-[#00072e]/50 backdrop-blur-lg py-6 shadow-lg z-50 border-b border-white/10 text-white sm:py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">


        
        {/* Brand Logo + Name */}
        <div className="items-center gap-3 bg-[#00072e]/50 backdrop-blur-md rounded-lg p-2 inline-block">
         {/* <img src="/logo-neon.png" alt="alipourweb logo" className="h-5 drop-shadow-neonBlue" />*/}
          <span className="sm:text-2xl text-lg font-bold tracking-wide bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 text-transparent bg-clip-text relative 
             before:content-[''] before:absolute before:inset-0 before:rounded  before:blur-[2px] before:-z-10 
             drop-shadow-[2px_2px_6px_rgba(0,0,50,0.5)]">alipourweb</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Licensing</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <hr className="my-6 border-white/20" />

      <p className="text-center text-xs text-gray-400">
        © 2025 <a href="https://alipourweb.com" className="hover:text-white underline">alipourweb.com</a>. All rights reserved.
      </p>
    </footer>
  );
}
