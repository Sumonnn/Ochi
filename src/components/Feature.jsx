import { motion } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'

const Feature = () => {

    const [isHovering,setHovering] = useState(false);
    const [isHovering2,setHovering2] = useState(false);

  return (
    <div className='w-full py-20 bg-white'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-16'>
            <h1 className='text-7xl font-["Neue_Montreal"] text-zinc-900 tracking-tight'>Featured projects</h1>
        </div>

        <div className="px-20">
          <div className="cards w-full flex gap-8 mt-10">
                 
            <div 
            onMouseEnter={()=>setHovering(true)} 
            onMouseLeave={()=>setHovering(false)} 
            className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter flex overflow-hidden font-["Neue_Montreal"] text-8xl text-yellow-300'>
                {
                    "FYDE".split("").map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={isHovering ? ({y:"0"}):({y:"100%"})} 
                            transition={{ease:[0.22,1,0.36,1], delay: index*.1}}
                            className='inline-block' key={index}>{item}</motion.span>
                       ))
                }
                </h1>
                <div className="card hover:scale-90 hover:transition hover:duration-300 hover:ease-in w-full h-full rounded-xl overflow-hidden">
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>

            <div onMouseEnter={()=>setHovering2(true)} onMouseLeave={()=>setHovering2(false)} className="cardcontainer w-1/2 h-[75vh] relative">
                <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Neue_Montreal"] text-8xl text-yellow-300'>
                    {
                        "VISE".split("").map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={isHovering2 ? ({y:"0"}):({y:"100%"})} 
                            transition={{ease:[0.22,1,0.36,1], delay: index*.1}}
                            className='inline-block' key={index}>{item}</motion.span>
                        ))
                    }
                </h1>
                <div className="card hover:scale-90 hover:transition hover:duration-300 hover:ease-in w-full h-full rounded-xl overflow-hidden">
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
                
          </div>
        </div>
    </div>
  )
}

export default Feature