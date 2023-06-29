import React from 'react'

const Footer = () => {
    return (
        <div className='footerBg'>
            <div className='max-w-7xl mx-auto min-h-[75vh] px-4 sm:px-6 lg:px-8 flex items-end'>
                <div className='w-full'>
                    <section className='mb-16'>
                        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                            <div className="max-w-screen-sm mx-auto text-center">
                                <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight ">We have what you’re looking for</h2>
                                <p className="mb-8 font-normal text-xs text-[#4776E6]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
                                <a href="#" className="text-white bg-gradient-to-r from-[#4776E6] to-[#8E54E9] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Get Started Now</a>
                            </div>
                        </div>
                    </section>
                    <footer className="m-6">
                        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                            <span className="text-white sm:text-center font-normal text-xs">© 2023 <a href="https://flowbite.com/" >Flowbite™</a>. All Rights Reserved.
                            </span>
                            <ul className="flex flex-wrap items-center mt-3 text-white font-normal text-xs sm:mt-0">
                                <li>
                                    <a href="#" className="mr-4  md:mr-6 ">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="mr-4  md:mr-6 ">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="mr-4  md:mr-6 ">Product</a>
                                </li>
                                <li className='mr-4 ml-14'>
                                    <img src='assets/facebookImage.png' className='h-[24px] w-[24px]' />
                                </li>
                                <li className='mr-4'>
                                    <img src='assets/instagramImage.png' className='h-[24px] w-[24px]' />
                                </li>
                                <li className='mr-4'>
                                    <img src='assets/twitterImage.png' className='h-[24px] w-[24px]' />
                                </li>
                                <li className='mr-4'>
                                    <img src='assets/youtubeImage.png' className='h-[24px] w-[24px]' />
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer