import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-100 w-[100%]  mt-12 grid p-4 lg:px-64  divide-y-2 cursor-default'>
            <div className='text-center p-4'>
                <div className='text-green-500 text-3xl font-semibold'>Discover premium electronics at unbeatable prices. Shop now online!</div>
            </div>
            <div className='text-center grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:gap-14'>
                <div className='p-2 mx-2 '>
                    <div className='text-start text-xl'>Explore Us</div>
                    <div className=' mt-1 text-justify text-sm text-slate-500 font-semibold'>Upgrade your life with the latest electronics! From cutting-edge gadgets to must-have devices, find everything you need at amazing prices. Whether you're searching for top-rated laptops, smartphones, or home tech, our exclusive deals make it easy to stay ahead. Shop now and experience the future of technology today!</div>
                </div>
                <div className='p-2 mx-2 '>
                    <div className='text-start text-xl'>Home</div>
                    <div className=' mt-1 text-start text-sm text-slate-500 font-semibold'>
                        <div>Products</div>
                        <div>Services</div>
                        <div>Brands</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className='p-2 mx-2 '>
                    <div className='text-start text-xl'>How i work</div>
                    <div className=' mt-1 text-start text-sm text-slate-500 font-semibold'>
                        <div>Experts and AI</div>
                        <div>Get a custom draft</div>
                        <div>Personlize and launch</div>
                        <div>reports</div>
                    </div>
                </div>
                <div className='p-2 mx-2 text-xl'>
                    <div className='text-start'>Pricing</div>
                    <div className=' mt-1 text-start text-sm text-slate-500 font-semibold'>
                        <div>Send Message</div>
                        <div>Send Mail</div>
                        <div>Phone call</div>
                    </div>
                </div>
            </div>
            <div className='text-center '>
                <p className="text-sm ">
                    &copy; <span className="font-semibold text-sm">2024 _patidarsumit_0x Inc, All right reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default Footer