import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * 180/Math.PI
            setrotate(angle-180);
        })
    })
  return (
    <div className='w-full h-screen eyes overflow-hidden'>
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                    <div style={{transform: `rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                        <div className="w-5 h-5 rounded-full bg-zinc-100 "></div>   
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                    <div style={{transform: `rotate(${rotate}deg)`}} className=" line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                        <div className="w-5 h-5 rounded-full bg-zinc-100 "></div>   
                    </div>
                </div>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Eyes
