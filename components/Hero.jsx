import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className=''>
                <p className='uppercase text-sm tracking-widest'>Hi, There</p>
                <h1 className='py-4'>
                    I'm <span className='text-[#0e79b2]'>Ayolekan.</span>
                </h1>
                <h1 className='py-2'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 max-w-[70%] mx-auto'>
                    Let me make your website dreams, a reality
                </p>
                <div className='flex items-center justify-between max-w-[330px] mx-auto py-4 gap-5'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg p-5 cursor-pointer ease-in duration-500 hover:scale-110'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg p-5 cursor-pointer ease-in duration-500 hover:scale-110'>
                            <FaLinkedin />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg p-5 cursor-pointer ease-in duration-500 hover:scale-110'>
                            <FaInstagram />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>


    // <div class="relative h-screen w-full flex items-center justify-center text-center">
    //     <main class="px-4 sm:px-6 lg:px-8 z-10">
    //         <div class="text-center">
    //             <p class="uppercase text-sm tracking-widest text-gray-600">
    //                 subheadline
    //             </p>
    //             <h1 className='py-4 text-gray-700'>
    //                 Hi There, I'm <span className='text-orange-300'>Ayolekan</span>
    //             </h1>
    //             <h1 className='py-2 text-gray-700'>
    //                 A Front-End Web Developer
    //             </h1>
    //             <p className='py-4 text-gray-700 max-w-[70%] mx-auto'>
    //                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    //                 Minima doloribus consequuntur nesciunt quaerat, voluptates numquam?
    //             </p>
    //             <div class="mt-5 sm:mt-8 sm:flex justify-center">
    //                 <div class="rounded-md shadow">
    //                 <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                     Get started
    //                 </a>
    //                 </div>
    //                 <div class="mt-3 sm:mt-0 sm:ml-3">
    //                 <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                     Live demo
    //                 </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </main>
    // </div>


  )
}

export default Hero