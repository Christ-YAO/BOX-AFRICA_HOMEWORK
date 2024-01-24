import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/logo.svg";
import Image from "../Image";
import Icon from "../Icon";

function index() {
  return (
    <div className="md:basis-1/3 max-w-[400px] m-auto ">
        <Image img={Logo} classCss="brightness-200 mb-5 h-7" />
        <p className="md:mb-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi sunt pariatur dignissimos repudiandae temporibus illo illum eius suscipit molestiae.</p>
        <p className="flex items-center mb-5"><span className="text-xl mr-4"><FaPhoneVolume /></span>Phone +1-543-123-4567</p>
        <p className="flex items-center mb-10"><span className="text-xl mr-4"><MdEmail /></span>example@huddle.com</p>
        <ul className="flex text-2xl gap-5">
            <Icon title="Facebook" icon={<AiFillFacebook />} link="#" classCss="hover:text-sky-500" />
            <Icon title="Instagram" icon={<FaInstagram />} link="#" classCss="hover:text-sky-500" />
            <Icon title="Twitter" icon={<FaTwitterSquare />} link="#" classCss="hover:text-sky-500" />
        </ul>
    </div>
  )
}

export default index