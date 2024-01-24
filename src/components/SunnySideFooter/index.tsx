import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Icon from "../Icon";

function Index() {
  return (
    <footer className='text-center flex flex-col justify-center items-center h-[300px] gap-10 bg-teal-400 text-emerald-800'>
      <a href='/' className='font-bold text-4xl hover:bg-[#065f4620] pt-1 pb-3 px-3 rounded link'>sunnyside</a>
      <ul className='flex items-center gap-x-10 font-semibold'>
          <a href='#' className='hover:bg-[#065f4620] py-2 px-3 rounded link'><li>About</li></a>
          <a href='#' className='hover:bg-[#065f4620] py-2 px-3 rounded hover:bg-gre link'><li>Services</li></a>
          <a href='#' className='hover:bg-[#065f4620] py-2 px-3 rounded hover:bg-gre link'><li>Projects</li></a>
      </ul>
      <ul className='flex items-center gap-x-10 mt-8 text-2xl'>
        <Icon  title='Facebook' link="#" icon={<ImFacebook2 />} classCss="icon" />
        <Icon  title='Instagram' link="#" icon={<FaInstagram />} classCss="icon" />
        <Icon  title='Twitter' link="#" icon={<FaTwitter />} classCss="icon" />
        <Icon  title='Pinterest' link="#" icon={<FaPinterest />}  classCss="icon"/>
      </ul>
    </footer>
  )
}

export default Index