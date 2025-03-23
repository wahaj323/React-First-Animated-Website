import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {
  
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap gap-10">
            <motion.h1 className='text-[28vw] leading-none font-doto font-semibold text-white -mt-16'>WE ARE OCHI</motion.h1>
            <motion.h1 className='text-[28vw] leading-none font-doto font-semibold text-white -mt-16'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee