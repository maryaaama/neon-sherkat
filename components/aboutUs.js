'use client'
import React from 'react'
import styles from '@/styles/card.module.css'

function AboutUsCard() {
  return (
    <div id='about'  className="flex flex-col lg:flex-row w-11/12 mx-auto justify-center items-center gap-10 lg:gap-40 py-10">
      
      {/* کارت متن */}
      <div
        className="relative flex flex-col gap-4 p-6 w-11/12 sm:max-w-md rounded-xl 
             shadow-[inset_0_-10px_5px_rgba(0,245,255,0.4)]
             bg-[hsl(240,15%,9%)]
             [background-image:
               radial-gradient(at_88%_40%,hsl(240,15%,9%)_0px,transparent_90%),
               radial-gradient(at_49%_30%,hsl(240,15%,9%)_0px,transparent_90%),
               radial-gradient(at_14%_26%,hsl(240,15%,9%)_0px,transparent_90%),
               radial-gradient(at_0%_64%,#00cfff_0px,transparent_95%),
               radial-gradient(at_41%_94%,#0099ff_0px,transparent_95%),
               radial-gradient(at_100%_99%,#0077ff_0px,transparent_95%)]"
      >
        {/* بوردر متحرک */}
        <div className={styles.cardBorder}></div>

        {/* عنوان */}
        <div>
          <h2 className="text-white text-lg sm:text-xl font-semibold">About Us</h2>
          <p className="text-[hsl(0,0%,83%)] text-sm sm:text-base mt-1 w-full">
            We are passionate about delivering innovative solutions to help you succeed.
            Our team is dedicated to providing top-notch services tailored to your needs.
          </p>
        </div>

        {/* خط جداکننده */}
        <hr className="sm:w-full w-10/12 h-[2px] bg-[hsl(240,9%,17%)] border-0 mx-auto" />

        {/* دکمه */}
        <button
          className="cursor-pointer px-4 py-2 sm:w-full w-10/12 my-5 text-white text-sm sm:text-base rounded-full border-0 mx-auto
          shadow-[0_0_5px_#00f5ff,0_0_5px_#00a0ff]
          bg-gradient-to-b from-[#00f5ff] via-[#6ad3f7] to-[#0099ff]
          hover:from-[#00e0f0] hover:via-[#00aaff] hover:to-[#0077e6]
          transition duration-300 ease-in-out"
        >
          Learn More
        </button>
      </div>
       
      {/* عکس */}
      <img
        src="/img/mokaab.png"
        alt="About Us"
        className="w-full sm:max-w-sm rounded-xl object-cover shadow-lg"
      />
    </div>
  )
}

export default AboutUsCard
