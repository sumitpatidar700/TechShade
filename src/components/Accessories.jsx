import React from 'react'

const Accessories = () => {
    return (
        <div className='bg-center w-full  bg-slate-200  relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex justify-center items-center '>
            <div className=' lg:grid-cols-2 my-16 md:grid-cols-2 justify-evenly grid  gap-2 '>
                <div className='py-20 mt-2 p-3 bg-[url(https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_875,h_585,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg)] bg-center bg-cover flex justify-cente items-start  flex-col'>
                    <p className='mx-2'> Holiday Deals</p>
                    <h1 className='text-5xl font-semibold m-2  '>Up to 30% off </h1>
                    <p className='mx-2'> Selected Smartphone Brands</p>
                    <button className=' m-2  text-sm  text-yellow-200 cursor-pointer p-2  rounded-lg '>Explore Now</button>
                </div>
                <div className='py-20 mt-2 p-3 bg-[url(https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_875,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg)] bg-center bg-cover flex justify-cente items-start  flex-col'>
                    <p className='mx-2'> Just In</p>
                    <h1 className='text-5xl font-semibold m-2  '>Take Your Sound Anywhere</h1>
                    <p className='mx-2'> Top Headphone Brands

                    </p>
                    <button className=' m-2  text-sm  text-yellow-200 cursor-pointer p-2  rounded-lg'>Explore Now</button>
                </div>

            </div>
        </div>
    )
}

export default Accessories