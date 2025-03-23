import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen pt-1'>
        <div className="textstructure mt-32 px-20">
            <div className="masker font-doto">
                <h1 className='uppercase text-[9vw] leading-[6.5vw] tracking-tight font-semibold'>We Create</h1>
            </div>
            <div className="masker font-doto">
                <div className="w-fit flex">
                    <div className='mr-5 rounded-md w-[9vw] h-[5.5vw] bg-green-400 mt-4'></div>
                    <h1 className='uppercase text-[9vw] leading-[6.5vw] tracking-tight font-semibold'>eye-opening</h1>
                </div>
                
            </div>
            <div className="masker font-doto">
                <h1 className='uppercase text-[9vw] leading-[6.5vw] tracking-tight font-semibold'>presentations</h1>
            </div>
        </div>
        <div className='border-t-[1px] border-gray-400 mt-30 flex justify-between items-center py-2 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p key={index} className='text-md tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2 mt-2'>
                <div className="px-5 py-1 border-[1px] rounded-full">START THE PROJECT</div>
                <div className="w-3 h-3 rounded-full border-[1px] py-4 px-4 flex justify-center text-xl items-center">
                    <div>
                    <MdArrowOutward/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage