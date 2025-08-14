import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCode } from 'react-icons/fa';

function GlowCard({ title, description, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-72 sm:w-80 h-52 sm:h-56 lg:h-64 rounded-3xl bg-[#0a0d3a] p-6 sm:p-8 overflow-hidden border border-[#3a84da] shadow-inner"
    >
      {/* Inner gradient glow */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none 
                   bg-radial-[at_50%_0%] from-[#008cff] via-[#030b2f] to-[#0a0d3a] blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-start h-full">
        <Icon className="text-[#00f5ff] drop-shadow-[0_0_12px_#00f5ff] text-2xl sm:text-3xl mb-3 sm:mb-4" />
        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">{title}</h3>
        <p className="text-indigo-200 text-xs sm:text-sm lg:text-base mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id='services' className="flex flex-col items-center gap-8 sm:gap-10 p-6 sm:p-10 bg-[#0a0d3a] h-full">
      {/* عنوان بخش */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center"
      >
        Our Services
      </motion.h2>

      {/* کارت‌ها */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8">
        <GlowCard
          title="Cloud Services"
          description="Secure cloud hosting, backup, and storage solutions."
          Icon={FaCloud}
        />
        <GlowCard
          title="Cyber Security"
          description="Advanced data and network protection solutions."
          Icon={FaShieldAlt}
        />
        <GlowCard
          title="Software Development"
          description="Custom web and mobile application development."
          Icon={FaCode}
        />
      </div>
    </section>
  );
}
