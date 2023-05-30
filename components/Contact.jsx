import Image from 'next/image'
import Link from 'next/link'

import contact from '../public/images/2.jpg'
import { FaAngleDoubleUp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:j-screen'>
      <div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase'>
          Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='max-[400px]:hidden col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image src={contact} alt="/" className='rounded-xl hover:scale-105 ease-in duration-300' />
              </div>
              <div>
                {/* <h2 className='py-2'>Name Here</h2> */}
                <p className='py-4'>Front-End Developer</p>
                <p className='py-4'>Front-End Developer jhuioh ohug yiguig uoufoufyi</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-500 hover:scale-110'>
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
        
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>First Name</label>
                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Last Name</label>
                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea rows="10" className='border-2 rounded-lg p-3 border-gray-300'></textarea>
                </div>
                <button className='w-full p-4 mt-4 bg-[#0e79b2] text-white'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#hero'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in-out duration-500'>
              <FaAngleDoubleUp className='' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact