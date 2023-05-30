import React from 'react'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

import Yemisi from '../public/images/projects/yemisi.png'
import Recipes from '../public/images/projects/quick-recipes.png'
import Ceme from '../public/images/projects/ceme.png'
import Heybeatrice from '../public/images/projects/heybeatrice.png'

const Project = () => {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <p className='text-xl tracking-widest uppercase'>Projects</p>
            <h2 className='py-4'>What I Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Website'
                    background={Yemisi}
                    type='HTML, CSS & JS'
                    url='/yemisi'
                />
                <ProjectItem 
                    title='Mobile App'
                    background={Recipes}
                    type='Flutter'
                    url='/recipes'
                />
                <ProjectItem 
                    title='Web App'
                    background={Ceme}
                    type='Laravel'
                    url='/ceme'
                />
                <ProjectItem 
                    title='Website'
                    background={Heybeatrice}
                    type='HTML, CSS & JS'
                    url='/heybeatrice'
                />
            </div>
        </div>
    </div>
  )
}

export default Project