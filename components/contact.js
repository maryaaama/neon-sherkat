'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id='contact' className=" relative flex items-end pb-15 sm:pb-60 sm:pt-30 pt-15 justify-center bg-[#0a0d3a] overflow-hidden">
      
         <div
         className="absolute top-[90%] sm:top-[70%] 
           w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] 
           md:w-[700px] md:h-[700px] 
           lg:w-[900px] lg:h-[900px] 
           rounded-full 
           bg-[radial-gradient(circle_at_center,_#00f5ff,_#00bfff,_#0099ff)] 
           blur-3xl"
       ></div>

       <div
         className="absolute top-[90%] sm:top-[70%] 
           w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] 
           md:w-[500px] md:h-[500px] 
           lg:w-[700px] lg:h-[700px] 
           rounded-full 
           bg-[#0a0d3a] 
           blur-md 
           z-5"
       ></div>
      {/* بک‌گراند نیم‌دایره نئونی 
      <div
        className="absolute top-0 left-0 w-full h-[100%] sm:h-full bg-bottom bg-no-repeat opacity-100 z-0 
                   scale-[0.9] sm:scale-100 sm:bg-cover bg-contain"
        style={{ backgroundImage: "url('/img/helal2.png')" }}
      />*/}
      
      {/* محتوای تماس با ما */}
      <motion.div 
        className="mb-40 z-20 mx-auto text-center border border-white/20 bg-white/5 backdrop-blur-md p-8  max-w-[80%] sm:max-w-2xl rounded-xl shadow-lg shadow-[#00a0ff]/40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="sm:text-3xl text-lg font-bold mb-4">Let’s Work Together</h2>
        <p className="text-white/80 mb-6 sm:text-lg text-base ">Looking for a creative team to build your next big idea? We’re here to help.</p>
        <button
          className="text-base sm:text-lg sm:px-6 sm:py-3 px-4 py-2
             rounded-full text-white
             bg-[radial-gradient(circle_at_center,_#00f5ff,_#00bfff,_#0099ff)]
             hover:bg-[radial-gradient(circle_at_center,_#00e0ff,_#00a0ff,_#0077ff)]
             shadow-lg shadow-[#00f5ff]/50
             transition duration-300 ease-in-out"
         >
          Contact Us
        </button>
      </motion.div>
    </section>
  )
}
