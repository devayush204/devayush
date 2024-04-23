import Image from 'next/image'
import React, { forwardRef } from 'react'
import img1 from "..//assets//peep-79.svg"

const Hero = () => {
    return (
        <section id='hero' className='bg-[#191919]'>
            <div className='flex flex-col justify-center items-center h-[100vh]'>
                <div className='mt-16 xl:mt-24 2xl:mt-14 '>
                    <Image className='w-[300px] xl:w-[400px] 2xl:w-[300px]' src={img1} />
                </div>
                <p className='text-xl text-white/50 font-semibold '>Hello, I'm </p>
                <p className='md:text-6xl text-4xl text-white font-extrabold'>Ayush Bhatt</p>
                <span className='text-center py-10 md:w-[800px] md:px-16 lg:px-10'>
                    <p className='text-base md:text-lg font-light  text-white/50'>A  full-stack developer, and UI/UX enthusiast. Explore a curated collection of my innovative projects that blend cutting-edge technology with captivating design. Let's bring your ideas to life in the digital realm!</p>
                </span>
            </div>
            
        </section>
    )
}
export default Hero