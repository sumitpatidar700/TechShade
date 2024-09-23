import React from 'react'


const Brands = () => {
  const Project = {
    height: "300px",
    // minWidth: "100%"
  }
  return (
    <div id='Brands' className=' bg-center w-full py-5 bg-slate-200  relative top-14 2xl:px-30 xl:px-40 lg:px-20 sm:px-4 flex flex-col justify-evenly  '>
      <div className=' text-4xl  font-semibold flex justify-center items-center'>Brands</div>
      <div className='grid justify-center items-center lg:grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-2 p-2'>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/03/apple-logo-design-phone-logos.webp" width={250} alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/03/samsung-logo-design.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/06/electronics-logos-sony-logotype.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/06/microsoft-logo-design.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/03/lg-logo-design.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/06/dell-logo-design.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/06/intel-logo-design.webp" width='250'alt="" /></div></div>
        <div className=' rounded-3xl   '><div className='bg-slate-200 rounded-3xl h-[100%] p-2'> <img src="https://inkbotdesign.com/wp-content/uploads/2024/06/hp-logo-design.webp" width='250'alt="" /></div></div>
      </div>
    </div>

  )
}

export default Brands