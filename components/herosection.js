'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id='home' className=" relative flex items-top pt-40 sm:pt-70 pb-25 justify-center bg-[#0a0d3a] overflow-hidden">
       <div
         className="absolute bottom-[80%] sm:bottom-[70%] 
           w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] 
           md:w-[700px] md:h-[700px] 
           lg:w-[900px] lg:h-[900px] 
           rounded-full 
           bg-[radial-gradient(circle_at_center,_#00f5ff,_#00bfff,_#0099ff)] 
           blur-3xl"
       ></div>

       <div
         className="absolute bottom-[80%] sm:bottom-[70%] 
           w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] 
           md:w-[500px] md:h-[500px] 
           lg:w-[700px] lg:h-[700px] 
           rounded-full 
           bg-[#0a0d3a] 
           blur-md 
           z-5"
       ></div>
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         className="z-20 text-center px-6 sm:px-8 md:px-12 mx-6 mt-0 sm:mt-20
                    border border-white/20 bg-white/5 backdrop-blur-md 
                    p-6 pb-4 sm:p-8 rounded-xl 
                    shadow-[0_-12px_30px_-8px_rgba(90,174,246,0.4)]
                    max-w-[95%] sm:max-w-2xl "
       >
       <h1
         className={`text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight
               bg-clip-text text-transparent
               bg-radial-[at_50%_75%] from-[#00f5ff] via-[#00bfff] to-[#0099ff]
               drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]
               `}
        >
        Welcome to Alipourweb
     </h1>
    <p className="text-white/90 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
     Empowering your digital presence with stunning, functional design and development.
    </p>
  </motion.div>

     </section>
   );
 }
