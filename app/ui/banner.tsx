import React from 'react';
import Image from 'next/image';

export default function banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
      alt='banner'
      src='/banner1.jpg'
      style={{objectFit:'cover'}}
      width={1920}
      height={1080}
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-white'>Not Sure Where To Qasha? Perfect.</p>
        <button className='text-yellow-500 bg-white px-10 py-4 
        shadow-md rounded-full font-bold my-3 hover:shadow-xl 
        active:scale-90 transition duration-150'> I'm Flexible </button>
      </div>
    </div>
  )
}
