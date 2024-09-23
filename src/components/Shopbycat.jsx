import React from 'react'

export default function Shopbycat() {
    return (
        <div className='bg-center w-full py-5 bg-slate-200  relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex flex-col justify-center items-center'>
            <div className='my-8 text-4xl font-semibold'>Shop by Category</div>
            <div className='w-full items-center lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 justify-evenly grid  gap-5 '>
                <div className='cursor-pointer flex justify-center items-center flex-col'>
                    <img src="https://static.wixstatic.com/media/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg" className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Computers</div>
                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg" className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Phone</div>

                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg " className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Drone</div>

                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_7cafe7e6503648ebbaf422161045861d~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_7cafe7e6503648ebbaf422161045861d~mv2.jpg " className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>TV & Home Cinmea</div>

                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_396e7b1e80764edca161180595507710~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_396e7b1e80764edca161180595507710~mv2.jpg " className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Wearable Watches</div>

                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_dbf65eb585cf415ba135313576716352~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_dbf65eb585cf415ba135313576716352~mv2.png " className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Speakers</div>

                </div>
                <div className='cursor-pointer flex justify-center items-center flex-col '>
                    <img src="https://static.wixstatic.com/media/c22c23_65076c29d2de4910b9376408663514c2~mv2.png/v1/fill/w_374,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_65076c29d2de4910b9376408663514c2~mv2.png " className='rounded-full transition-transform duration-300 ease-in-out hover:scale-110' alt="Computer img" width={250} />
                    <div className=' mt-2 text-xl font-medium'>Headphones</div>

                </div>
            </div>
        </div>
    )
}
