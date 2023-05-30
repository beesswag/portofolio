import React from 'react'
import Image from 'next/image'
import Html from '../public/images/html.png'
import ReactIcon from '../public/images/react.png'
import NextIcon from '../public/images/next.png'
import Css from '../public/images/css.png'
import JS from '../public/images/javascript.png'
import Tailwind from '../public/images/tailwind.png'
import Laravel from '../public/images/laravel.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4 py-16'>
            <p className='text-xl tracking-widest uppercase text-orange'>
                Skills
            </p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='py-4 grid min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={Html} width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            HTML
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={Css}width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            CSS
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={Tailwind}width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            Tailwind
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={JS} width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            JavaScript
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={ReactIcon} width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            React
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={NextIcon} width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            Next
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-[375px]:mx-[20px]'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className=''>
                            <Image src={Laravel} width='64' height='64' alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            Laravel
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills