import React from 'react'
import project from '../../public/images/projects/heybeatrice.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import NavbarAlt from '@/components/NavbarAlt'

export const metadata = {
  title: 'Website Project',
  description: 'Portfolio Website for Ayolekan',
}

const page = () => {
  return (
    <>
    <NavbarAlt />
    <div className='w-full overflow-x-hidden'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' fill src={project} alt='' style={{objectFit:"cover"}} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>HeyBeatrice</h2>
          <h3>Website</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-4 gap-4 pt-8'> 
        <div className='col-span-3'>
          <p className='py-2'>Project</p>
          <h2 className=''>Overview</h2>
          <p className='py-4'>
            HeyBeatrice is a virtual assistant service available 
            to entrepreneurs, executives, employees, freelancers and teams worldwide.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ex.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ex.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ex.
          </p>

          <div className='p-2'>
            <p className='font-bold pb-2'>Technologies</p>
            <div className='block'>
              <p className='py-2 flex items-center'>
                <RiCheckboxBlankCircleFill className='pr-2' /> HTML
              </p>
              <p className='py-2 flex items-center'>
                <RiCheckboxBlankCircleFill className='pr-2' /> CSS
              </p>
              <p className='py-2 flex items-center'>
                <RiCheckboxBlankCircleFill className='pr-2' /> JavaScript
              </p>
            </div>
          </div>
          
          <div className='pt-8'>
            <Link href='/'>
              <button className='px-8 py-2 mt-4 mr-8 bg-[#0e79b2] text-white'>Website</button>
            </Link>
            <Link href='/#project'>
              <button className='px-8 py-2 mt-4'>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page