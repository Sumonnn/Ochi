import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>

            <h1 className="font-['Neue_Montreal'] py-20 px-20 text-[4vw] leading-[4.5vw] tracking-tight">
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>

            <div className='w-full flex border-t-[1px] py-5 px-20 border-yellow-200'>
                <div className='w-2/4 '>
                    <p className='font-["Neue_Montreal]'>What you can expect:</p>
                </div>
                <div className='w-2/4 flex'>
                    <div className="w-2/4 flex flex-col gap-12 text-[1.1vw] leading-[1.6vw]">
                        <p>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                        </p>
                        <p>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating
                        </p>
                    </div>
                    <div className=' mt-36 px-10'>
                        <p className='underline'>Instagram</p>
                        <p className='underline'>Behance</p>
                        <p className='underline'>Facebook</p>
                        <p className='underline'>Linkedin</p>
                    </div>
                </div>
            </div>

            <div className='w-full border-t-[1px] flex gap-5 px-20 mt-32 border-yellow-200 py-5'>
                <div className='w-1/2'>
                    <h1 className='text-6xl'>
                        Our approach:
                    </h1>
                    <button className='px-8 py-4 uppercase flex items-center gap-6 rounded-full mt-8 text-xl bg-zinc-900 text-white'>
                        Read More 
                        <div className='w-3 h-3 bg-zinc-100 rounded-full'>

                        </div>
                    </button>
                </div>
                <div className="w-1/2 h-[65vh] overflow-hidden rounded-xl">
                    <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About