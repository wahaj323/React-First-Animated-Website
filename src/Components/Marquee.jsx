import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap gap-10">
            <h1 className='text-[25vw] leading-none font-doto font-semibold text-white -mt-14'>WE ARE OCHI</h1>
            <h1 className='text-[2vw] leading-none font-doto font-semibold text-white -mt-14'>WE ARE OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee