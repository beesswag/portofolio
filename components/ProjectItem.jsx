import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({ title, background, type, url }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#0e79b2]'>
        <Image className='rounded-xl group-hover:opacity-10' src={background} alt='' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{type}</p>
            <Link href={url}>
                <p className='text-center py-3 rounded-lg bg-white font-bold text-sm cursor-pointer'>View</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem