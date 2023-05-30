// import Navbar from '@/components/Navbar'
import './globals.css'
import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400','500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ayolekan Biao',
  description: 'Portfolio Website for Ayolekan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
