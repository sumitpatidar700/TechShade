import React from 'react'

const Front = () => {
    return (
        <div className='bg-[url(https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1599,h_706,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png)] bg-center w-full h-[500px] bg-slate-200 px-4 relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex justify-center items-center '>
            <div className=' lg:grid-cols-2  md:grid-cols-2 justify-evenly grid   '>
                <div className='  flex justify-cente items-start  flex-col'>
                    <h1 className='text-5xl font-semibold m-2 my-4 '>
                        Incredible Prices on All Your Favorite Items.
                    </h1>
                    <p className='m-2 '>
                    Get more for less on selected brands
                    </p>
                    <button className=' m-2  text-xl bg-green-500 text-white p-3  rounded-3xl'>Shop Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Front