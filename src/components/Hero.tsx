import React from 'react'

const Hero = () => {
    return (
        <div className='min-h-[calc(100vh-91px)] w-full flex justify-between items-center '>
            <div className='w-1/2 h-full text-white pb-28'>
                <div>
                    <h1 className='text-5xl font-bold leading-[58.09px]'>Learn how to launch a successful podcast</h1>
                    <p className='text-base font-normal leading-[19.36px] pr-56 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='mt-12'>
                    <button className='bg-gradient-to-r from-[#4776E6] to-[#8E54E9] py-2 text-xl font-bold  rounded-[10px] px-6'>Sign up Now</button>
                </div>
            </div>
            <div className='w-1/2 h-full relative'>
                <img src="assets/hero1.png" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' alt="hero1" />
                <img src="assets/hero2.png" className='absolute -top-60 left-[65%] -translate-x-1/2 z-10' alt="hero2" />
                <img src="assets/hero3.png" className='absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 z-0' alt="hero3" />
                <img src='assets/hero4.png' className='absolute top-20 -right-24 z-20' alt='hero4'/>
                <img src='assets/hero5.png' className='absolute -top-28 -right-40 z-50' alt='hero5'/>
            </div>
        </div>
    )
}

export default Hero