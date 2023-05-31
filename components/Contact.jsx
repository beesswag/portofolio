import Image from 'next/image'
import Link from 'next/link'

import contact from '../public/images/2.jpg'
import { FaAngleDoubleUp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
      <div id='contact' className='w-full'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4 py-16'>
          <p className='text-xl tracking-widest uppercase'>
            Contact
          </p>
          <h2 className='py-4'>Get in Touch</h2>

          <div className='mx-auto max-md:px-5'>
            <form className="w-full py-10 px-5 shadow-xl rounded-xl max-md:p-5">
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 max-md:px-0">
                  <label className="block tracking-wide mb-2" for="">First Name</label>
                  <input className="block w-full border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-3 max-md:px-0">
                  <label className="block tracking-wide mb-2" for="">Last Name</label>
                  <input className="block w-full border rounded-xl py-3 px-4 leading-tight focus:outline-none" type="text" />
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3 max-md:px-0">
                  <label className="block tracking-wide mb-2" for="">Email Address</label>
                  <input className="block w-full border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none" type="email" />
                </div>
              </div>
                
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3 max-md:px-0">
                  <label className="block tracking-wide mb-2" for="">Your Message</label>
                  <textarea rows="10" class="block w-full border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none"></textarea>
                </div>
                <div className="flex flex-col items-center w-full px-3">
                  <button className='shadow-md px-8 py-2 mt-4 bg-[#0e79b2] text-white'>Send Message</button>
                </div>     
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Contact