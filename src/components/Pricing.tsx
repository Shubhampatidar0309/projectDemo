import React from 'react'

const Pricing = () => {
    return (
        <section className="pricingBg">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 ">Choose your plan</h2>
                    <p className="mb-5 font-normal text-gray-500 text-sm px-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    <div className='flex justify-center'>
                        <ul className=" flex items-center px-2 py-2 text-sm font-medium text-center bg-white shadow-md rounded-xl">
                            <li className="">
                                <a href="#" className="inline-block p-1 text-black rounded-lg active bg-[#E1A6FF]" aria-current="page">monthly</a>
                            </li>
                            <li className="ml-1">
                                <a href="#" className="inline-block p-1 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">yearly</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div className="flex flex-col max-w-xs p-6 mx-auto text-start text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
                        <h3 className="mb-4 text-base font-bold text-black">Basic Plan</h3>
                        <p className="font-normal text-sm text-black">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        <div className="flex items-center justify-start  my-8 text-[#7A3199]">
                            <span className="mr-2 text-[32px] font-bold">$ 54</span>
                            <span className="text-sm font-normal">/month</span>
                        </div>
                        <ul className="mb-8 space-y-1 text-left text-xs font-bold">
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                        </ul>
                        <div>
                            <a href="#" className="text-center text-[#7A3199] rounded-md border-[1px] font-normal text-sm border-[#7A3199]  px-5 py-2 ">Start Free Trial</a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs p-6 mx-auto text-start text-gray-900 bg-[#7A3199] border border-gray-100 rounded-lg shadow">
                        <h3 className="mb-4 text-base font-bold text-white">Premium Plan</h3>
                        <p className="font-normal text-sm text-white">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        <div className="flex items-center justify-start  my-8 text-white">
                            <span className="mr-2 text-[32px] font-bold">$ 54</span>
                            <span className="text-sm font-normal">/month</span>
                        </div>
                        <ul className="mb-8 space-y-1 text-left text-xs font-bold text-white">
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                        </ul>
                        <div>
                            <a href="#" className="text-center text-[#7A3199] rounded-md border-[1px] font-normal text-sm border-white bg-white  px-5 py-2 ">Start Free Trial</a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xs p-6 mx-auto text-start text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
                        <h3 className="mb-4 text-base font-bold text-black">Basic Plan</h3>
                        <p className="font-normal text-sm text-black">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        <div className="flex items-center justify-start  my-8 text-[#7A3199]">
                            <span className="mr-2 text-[32px] font-bold">$ 54</span>
                            <span className="text-sm font-normal">/month</span>
                        </div>
                        <ul className="mb-8 space-y-1 text-left text-xs font-bold">
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                            <li className="flex items-center space-x-3 ">
                                Free access to video className
                            </li>
                        </ul>
                        <div>
                            <a href="#" className="text-center text-[#7A3199] rounded-md border-[1px] font-normal text-sm border-[#7A3199]  px-5 py-2 ">Start Free Trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing