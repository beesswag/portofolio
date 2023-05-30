"use client"

import Image from 'next/image'
import Link from 'next/link'
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#FBFEF9');
  const [linkColor, setLinkColor] = useState('#191923');
  const pathname = usePathname();

  // Changing Navbar background and link colors based on current route
  // useEffect(()=> {
  //   if(pathname === '/yemisi' 
  //     || pathname === '/recipes'
  //     || pathname === '/heybeatrice'
  //     || pathname === '/ceme') 
  //   {
  //     setNavBg('transparent')
  //     setLinkColor('#FBFEF9')
  //   } else {
  //     setNavBg('#FBFEF9')
  //     setLinkColor('#191923')
  //   }
  // }, [pathname])
  
  // Opening and closing mobile navbar
  const handleNav = () => {
    setNav(!nav)
  }

  // Add border bottom shadow to navbar after beginning scrolling
  useEffect(() => {
    const handleShadow = () => {
      if(window.window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);

    // return () => {
    //   window.removeEventListener('scroll', handleShadow);
    // };

  }, []);

    return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-sm z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src="/images/logo.png" alt='/' width={80} height={80}/>
        </Link>
        <div>
          {/* links */}
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/#hero'>
              <li className='ml-10 text-sm hover:border-b hover:border-[#0e79b2]'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm hover:border-b hover:border-[#0e79b2]'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm hover:border-b hover:border-[#0e79b2]'>Skills</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 text-sm hover:border-b hover:border-[#0e79b2]'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm hover:border-b hover:border-[#0e79b2]'>Contact</li>
            </Link>
          </ul>
          {/* hamburger menu icon */}
          <div className='md:hidden hover:cursor-pointer' onClick={handleNav}>
            <RiBarChartHorizontalLine size={25} /> 
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fcfcfc] p-10 ease-in-out duration-300'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'><Image src='/images/logo.png' alt='/' width={80} height={37} /></Link>
              <div onClick={handleNav} className='rounded-full shadow-md cursor-pointer'>
                <RiCloseFill />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className=''>
              <Link href='/'>
                <li onClick={()=> setNav(false)} className='max-w-[30px] py-4 text-sm hover:border-b hover:border-[#0e79b2]'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='max-w-[30px] py-4 text-sm hover:border-b hover:border-[#0e79b2]'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=> setNav(false)} className='max-w-[30px] py-4 text-sm hover:border-b hover:border-[#0e79b2]'>Skills</li>
              </Link>
              <Link href='/#project'>
                <li onClick={()=> setNav(false)} className='max-w-[30px] py-4 text-sm hover:border-b hover:border-[#0e79b2]'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='max-w-[30px] py-4 text-sm hover:border-b hover:border-[#0e79b2]'>Contact</li>
              </Link>
            </ul>
            <div className='pt-10'> 
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link href='/'>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer ease-in duration-500'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='/'>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer ease-in duration-500'>
                    <FaLinkedin />
                  </div>
                </Link>
                <Link href='/'>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer ease-in duration-500'>
                    <FaInstagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  
export default Navbar