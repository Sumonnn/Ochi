import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen px-20 items-center bg-white flex gap-5'>
        <div className="cardcontainer h-[55vh] w-1/2">
          <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
               <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />   
               <button className='absolute px-3 rounded-full py-1 border-[1px] border-[#CDEA68] left-10 bottom-10 text-[#CDEA68]'>©2019-2022</button>
          </div>    
        </div> 

        <div className="cardcontainer flex gap-5 h-[55vh] w-1/2">
          <div className="card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center">
               <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> 
               <button className='absolute px-3 rounded-full py-1 border-[1px] left-10 bottom-10 '>RATING 5.0 ON CLUTCH</button>
          </div>    
          <div className="card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />  
              <button className='absolute px-3 rounded-full py-1 border-[1px] left-10 bottom-10 '>BUSINESS BOOTCAMP ALUMNI</button>
          </div>    
        </div>        
    </div>
  )
}

export default Cards