import React from 'react'
import project from '../../public/images/projects/quick-recipes.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import NavbarAlt from '@/components/NavbarAlt'

export const metadata = {
  title: 'Android Mobile App Project',
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
            <h2 className='py-2'>Quick Recipes</h2>
            <h3>Android Mobile App</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-4 gap-4 pt-8'> 
        <div className='col-span-3'>
          <p className='py-2'>Project</p>
          <h2 className=''>Overview</h2>
          <p className='py-4'>
            Quick Recipes offers you quick and easy food and drink recipes.
            Whether you are Offline or Online, whether you have cooking material or not, we've got some interesting recipes for you
          </p>
          <p className='py-4'>
            FEATURES:
              -Get Step-by-step instructions on food or drink recipes
              -Watch YouTube videos for food recipes
              -Search for recipes online by any keyword even holidays (e.g. Christmas)
              -Keep track of calorie intake from packaged products anytime, anywhere with our KJ/CALORIES Converter
          </p>

          <div className='p-2'>
            <p className='font-bold pb-2'>Technologies</p>
            <div className='block'>
              <p className='py-2 flex items-center'>
                <RiCheckboxBlankCircleFill className='pr-2' /> Flutter
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