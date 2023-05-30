import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    // <div className='w-full md:h-screen p-2 flex items-center py-16 px-8'>
    //     <div className='m-auto md:grid grid-cols-3 gap-8'>
    //         <div className='col-span-2 md:px-20'>
    //             <p className='uppercase text-xl tracking-widest text-coral'>About</p>
    //             <h2 className='py-4'>Me</h2>
    //             <p className='py-2'>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //                 Quaerat, labore! Fuga quasi omnis reprehenderit optio, 
    //                 autem architecto, 
    //             </p>
    //             <p className='py-2'>
    //                 Sint voluptates quisquam esse? Quasi, et. Incidunt repellendus aperiam 
    //                 ab nesciunt eum, rem ullam perspiciatis expedita totam, cumque temporibus 
    //                 aut asperiores ducimus voluptatem assumenda hic,
    //             </p>
    //         </div>
    //         <div className='text-center w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-10 md:mt-0 p-4 hover:scale-105 ease-in-out duration-300'>
    //             <img src="/images/2.jpg" alt="" className='rounded-xl' />
    //         </div>
    //     </div>
    // </div>

    <div id='about' className="sm:flex justify-center items-center w-full h-full lg:px-20 mx-auto px-4 py-16">
        <div className="sm:w-1/2">
            <div className="text">
                <p className='uppercase text-xl tracking-widest text-coral'>About</p>
                <h2 className='py-4'>Me</h2>
                <p className='py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat, labore! Fuga quasi omnis reprehenderit optio, 
                    autem architecto, 
                </p>
                <p className='py-2'>
                    Sint voluptates quisquam esse? Quasi, et. Incidunt repellendus aperiam 
                    ab nesciunt eum, rem ullam perspiciatis expedita totam, cumque temporibus 
                    aut asperiores ducimus voluptatem assumenda hic,
                </p>
            </div>
        </div>
        <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in-out duration-300">
                <img src="/images/hero.jpg" alt="" className='rounded-xl' />
            </div>
        </div>
    </div>

  )
}

export default About