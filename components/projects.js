'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '@/data/projects.js'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section
      id='portfolio'
      className="flex flex-col items-center gap-8 sm:gap-10 p-6 sm:p-10 bg-[#0a0d3a] h-full sm:mt-10"
    >
      {/* عنوان */}
      <div className="max-w-3xl text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold neonGradientLight">Recent Projects</h2>
        <p className="text-white/60 mt-2 sm:text-lg text-sm">
          Crafted with passion and precision
        </p>
      </div>

      {/* گرید پروژه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col border border-white/20 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden 
                       shadow-lg shadow-[#00f5ff]/30 
                       hover:shadow-[#00a0ff]/50 
                       transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* تصویر */}
            <div
              className="aspect-video bg-cover bg-center w-full"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* متن پروژه */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold neonGradientLight">
                Project #{project.id}
              </h3>
              <p className="text-white/70 text-sm sm:text-base flex-1">
                A tailored digital solution built for client success and engagement.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* دکمه More */}
      {projects.length > 3 && !showAll && (
        <button
          className="mt-10 px-6 py-3 rounded-full text-white text-base sm:text-lg
                     bg-[radial-gradient(circle_at_center,_#00f5ff,_#00bfff,_#0099ff)]
                     hover:bg-[radial-gradient(circle_at_center,_#00e0ff,_#00a0ff,_#0077ff)]
                     shadow-lg shadow-[#00f5ff]/50
                     transition duration-300 ease-in-out"
          onClick={() => setShowAll(true)}
        >
          Show More
        </button>
      )}
    </section>
  )
}
