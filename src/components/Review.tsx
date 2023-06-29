import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
const Review = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div>
                <h1 className='font-bold text-4xl my-6'>Review from customers</h1>
                <p className='font-normal text-xs w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10"
                >
                    <SwiperSlide>
                        <div className='border border-[#E1A6FF] p-4 text-start'>
                            <div className='flex justify-start'>
                                <div>
                                    <img src="assets/profitImage.png" className='h-[70px] w-[70px]' alt="profit" />
                                </div>
                                <div className='px-6'>
                                    <h1 className='font-bold text-base'>Lolla Smith</h1>
                                    <p className='font-normal text-sm'>Microsoft</p>
                                    <div className='flex'>
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#E1A6FF] p-4 text-start'>
                            <div className='flex justify-start'>
                                <div>
                                    <img src="assets/profitImage.png" className='h-[70px] w-[70px]' alt="profit" />
                                </div>
                                <div className='px-6'>
                                    <h1 className='font-bold text-base'>Lolla Smith</h1>
                                    <p className='font-normal text-sm'>Microsoft</p>
                                    <div className='flex'>
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#E1A6FF] p-4 text-start'>
                            <div className='flex justify-start'>
                                <div>
                                    <img src="assets/profitImage.png" className='h-[70px] w-[70px]' alt="profit" />
                                </div>
                                <div className='px-6'>
                                    <h1 className='font-bold text-base'>Lolla Smith</h1>
                                    <p className='font-normal text-sm'>Microsoft</p>
                                    <div className='flex'>
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#E1A6FF] p-4 text-start'>
                            <div className='flex justify-start'>
                                <div>
                                    <img src="assets/profitImage.png" className='h-[70px] w-[70px]' alt="profit" />
                                </div>
                                <div className='px-6'>
                                    <h1 className='font-bold text-base'>Lolla Smith</h1>
                                    <p className='font-normal text-sm'>Microsoft</p>
                                    <div className='flex'>
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                        <img src='assets/star.png' alt='star' className='h-[20px] w-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='font-normal text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default Review