import { FaBarsStaggered } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { useState } from 'react';

function Index() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <nav className='flex items-center justify-between text-white mb-[100px] relative select-none '>
        <a href='/login' className='font-bold text-2xl'>sunnyside</a>
            <ul className='hidden md:font-semibold items-center gap-x-10 md:relative md:flex md:bg-transparent md:top-0 md:text-white'>
              <div className="absolute -top-7 right-0"></div>
                <a href='/huddle' className='btn py-2'><li>About</li></a>
                <a href='/huddle' className='btn py-2'><li>Services</li></a>
                <a href='/huddle' className='btn py-2'><li>Projects</li></a>
                <Button variant="outlined" style={{ borderRadius: '150px', backgroundColor: '#fff5', color:'#fff', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold'}} className='contact'>contact</Button>
            </ul>
        {click ? 
            <ul className='block md:hidden absolute top-24 right-3 w-full sm:w-80 text-center gap-y-5 bg-white pt-4 text-gray-500 md:font-semibold items-center gap-x-10 md:relative md:bg-transparent md:top-0 md:text-white md:right-20'>
              <div className="navresp absolute -top-7 right-0"></div>
                <li className='btn2 py-2'><a href="/huddle">About</a></li>
                <li className='btn2 py-2'><a href="/huddle">Services</a></li>
                <li className='btn2 py-2'><a href="/huddle">Projects</a></li>
                <Button variant="outlined" style={{ borderRadius: '150px', backgroundColor: '#fff5', color:'#fff', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold'}} className='contact'>contact</Button>
            </ul> : null
        }
        <FaBarsStaggered onClick={() => setClick(!click)} className='text-2xl cursor-pointer md:hidden hover:text-[#fffa]' />
    </nav>
  )
}

export default Index