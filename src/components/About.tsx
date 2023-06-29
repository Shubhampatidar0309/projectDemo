import React from 'react'

const About = () => {
    return (
        <div className='max-w-screen-xl min-h-[8vh] px-4 py-8 mx-auto lg:py-24 lg:px-6 flex justify-between items-center'>
            <div className='w-1/2 flex justify-center'>
                <div className='mx-2 '>
                    <div className='w-[268px] h-[160px] border border-[#7A3199] rounded-lg flex-col py-6 px-4 my-10'>
                        <h1 className='font-bold text-xl mb-4'>Interactive Features</h1>
                        <p className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div className='w-[268px] h-[160px] border border-[#7A3199] rounded-lg flex-col py-6 px-4'>
                        <h1 className='font-bold text-xl mb-4'>Interactive Features</h1>
                        <p className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>
                <div className='mx-2 mt-8'>
                    <div className='w-[268px] h-[160px] border border-[#7A3199] rounded-lg flex-col py-6 px-4 my-10'>
                        <h1 className='font-bold text-xl mb-4'>Interactive Features</h1>
                        <p className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div className='w-[268px] h-[160px] border border-[#7A3199] rounded-lg flex-col py-6 px-4'>
                        <h1 className='font-bold text-xl mb-4'>Interactive Features</h1>
                        <p className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 px-24'>
                <h1 className='font-bold text-5xl'>About the Course</h1>
                <p className='font-normal text-sm my-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
                <a href="#" className="text-white bg-gradient-to-r from-[#4776E6] to-[#8E54E9] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Explore Now</a>
            </div>
        </div>
    )
}

export default About