import React from 'react'

const Display = () => {
    return (
        <div className='bg-center w-full py-5 bg-slate-200  relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex flex-col justify-center items-center '>
            <div className=' flex h-[500px] bg-[url(https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1799,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png)] bg-cover bg-center border-black w-full '>
                <div className='w-[20%]'></div>
                <div className='w-[80%] relative'>
                    <div className='' >
                    </div>
                    <div className=' absolute inset-0 bg-white  z-10 p-4 text-center flex justify-center items-end flex-col' style={{ background: 'linear-gradient(240deg, white 50%, transparent 50%)' }}>
                        <div className='w-[70%] flex justify-center items-center flex-col'>
                            <div className='text-2xl font-semibold'>Save up to</div>
                            <div className='text-7xl font-bold text-red-700'>$150</div>
                            <div className='text-3xl font-semibold w-[60%]'>On selected laptop & tablets brands</div>
                            <div className='my-2 text-sm font-bold '>Terms and conditions apply</div>
                            <button className='bg-green-300 p-2'>Shop Now</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Display