import React from 'react'
import Image from 'next/image';


import { GlobeAltIcon, 
        Bars3Icon,
        UserCircleIcon,
        MagnifyingGlassIcon,
        UserIcon, 
        Bars4Icon} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-black shadow-md p-5 md:px-10'>
        {/* left lOGO*/}
        <div className='relative flex items-center h-10 cursor-pointer my-auto '>
            <Image
            alt='logo'
            src='/qasha.png'
            style={{objectFit:'contain', objectPosition:'left'}}
            width={100}
            height={100}
            />
        </div>

        {/* middle SEARCH*/}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input className='flex-grow pl-5 bg-transparent focus:border-transparent focus:ring-0 text-white border-none' type="text" placeholder='Start Your Search' />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-yellow-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>

        {/* right */}
        <div className='flex items-center space-x-4 justify-end'>
            <p className='hidden text-gray-500 md:inline cursor-pointer'>Become a Mastandi</p>
            
            <GlobeAltIcon className='h-6 text-white cursor-pointer'/>

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars4Icon className='h-6 text-white' />
                <UserCircleIcon className='h-6 text-white'/>
            </div>
        </div>
      
    </header>
  )
}
