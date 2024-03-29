import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div key={index} className="masker">
            <div className="w-fit flex items-center">
               {
                 index === 1 && 
                  <motion.div
                   initial={{width:0}}
                   animate={{width:"9vw"}}
                   transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                   className='w-[9vw] overflow-hidden h-[5.9vw] rounded-md'>
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                   </motion.div> 
               }
               <h1 className="font-['Arial'] leading-[7vw] tracking-tighter font-semibold uppercase text-[8vw]">
              {item}
              </h1>
            </div>
          </div>
        })}
      </div>

      <div className="border-t-[1px] font-['Neue_Montreal'] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {
          ["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))
        }
        <div className='start flex items-center gap-5'>
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>


    </div>
  )
}

// font-['Founders_Grotesk'] ----> this is not working

export default LandingPage