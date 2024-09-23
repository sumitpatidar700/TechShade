import React from 'react'
import pickup from './../assets/pickup.svg'
import box from './../assets/box.svg'
import check from './../assets/check.svg'
import clock from './../assets/clock.svg'
const Factors = () => {
    return (
        <div className='bg-center w-full py-10 bg-slate-200  relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex justify-center items-center '>
            <div className=' items-center lg:grid-cols-4  md:grid-cols-2 justify-evenly grid  gap-2 '>
                <div className='flex items-center justify-center border p-5 h-[250px] bg-white mx-2'>
                    <img src={pickup} width='60' alt="" />
                    <h2 className='text-xl font-semibold mx-3'>Curb-side pickup</h2>
                </div>
                <div className='flex items-center justify-center border p-5 h-[250px] bg-white mx-2'>
                    <img src={box} width='40' alt="" />
                    <h2 className='text-xl font-semibold mx-3'>Free shipping on orders over $50</h2>
                </div>
                <div className='flex items-center justify-center border p-5 h-[250px] bg-white mx-2'>
                    <img src={check}   className='' width='50' alt="" />
                    <h2 className='text-xl font-semibold mx-3'>Low prices guaranteed</h2>
                </div>
                <div className='flex items-center justify-center border p-5 h-[250px] bg-white mx-2'>
                    <img src={clock} className='' width='50' alt="" />
                    <h2 className='text-xl font-semibold mx-3'>Available to you 24/7 </h2>
                </div>
            </div>
        </div>
    )
}

export default Factors