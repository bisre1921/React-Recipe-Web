import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLinks } from "../Constants";
import { IoMenu } from "react-icons/io5";
import {  useState } from "react";
import { TbLetterX } from "react-icons/tb";
import {Link} from "react-router-dom";

const NavBar = () => {

    const [isMenuClicked , setIsMenuClicked] = useState(false);

    const handleMenuClicked = () => {
        setIsMenuClicked(!isMenuClicked);
    }


  return (
    <nav className="flex justify-between overflow-hidden items-center px-4 py-2 text-white">
        <div className={`flex gap-2 justify-center items-center p-[-120px] ${isMenuClicked ? "md:hidden" : ""} `}>
            <GiForkKnifeSpoon className="w-12 h-12" />
            <p className="">
                TastyBites
            </p>
        </div>
        <div className={`flex ${isMenuClicked ? "md:flex-col" : "md:hidden flex-row"} md:pl-0 lg:pl-48 xl:pl-80 2xl:pl-[380px] pl-[900px]   justify-center items-center md:flex-col 2xl:flex-row md:gap-4 gap-16`}>
            {NavLinks.map(navLink => (
                <ul  key={navLink.label}>
                    <li >
                        <Link to={navLink.to}>
                            {navLink.label}
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
        
        <div className={`flex ${isMenuClicked ? "items-start" : "items-center"} justify-center`} onClick={handleMenuClicked}>
           
            {isMenuClicked ? <TbLetterX className="md:block hidden cursor-pointer" /> : <IoMenu className="md:block hidden cursor-pointer" />}
        </div>
        
    </nav>
  )
}



export default NavBar