import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

    

  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-900'>
        <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:20}} className='text-[15vw] tracking-tighter leading-none font-["Arial"] font-semibold uppercase mb-1 pt-1'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:20}} className='text-[15vw] tracking-tighter leading-none font-["Arial"] font-semibold uppercase mb-1 pt-1'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee