import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden text-[#FFFFFF]">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:12}} className='text-[20vw] tracking-tighter leading-none font-["Arial"] font-semibold uppercase mb-1 pr-16 pt-1'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:12}} className='text-[20vw] tracking-tighter leading-none font-["Arial"] font-semibold uppercase mb-1 pr-16  pt-1'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee