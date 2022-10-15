import { useState } from "react";
import logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavLink from "./navLink";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    setNav(false);
  };
  const navLinks = [
    { title: "home", url: "/" },
    { title: "feature", url: "#feature" },
    { title: "contact us", url: "/contact" },
    { title: "become a vendor", url: "/vendor" },
  ];
  return (
    <nav className='shadow-md w-full'>
      <div className='max-w-7xl w-[90%] mx-auto py-4 md:py-0 flex flex-col md:flex-row justify-between  md:items-center'>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={closeNav}>
            <img className='w-20 object-contain' src={logo} alt='logo' />
          </Link>
          <i
            className='md:hidden bg-[#7805A7] text-white p-2 rounded-md text-xl'
            onClick={() => setNav(!nav)}
          >
            {nav ? <IoClose className='' /> : <FiMenu className='' />}
          </i>
        </div>
        <div
          className={`${
            nav ? "" : "hidden"
          }  md:flex flex-col md:flex-row text-base md:items-center space-y-6 md:space-y-0 my-4 md:space-x-5 text-gray-700`}
        >
          {navLinks.map((item, i) => {
            return <NavLink key={i} {...item} closeNav={closeNav} index={i} />;
          })}
        </div>

        <button
          className={`${
            nav ? "" : "hidden"
          } md:block bg-[#7805A7] w-fit transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-md text-purple-50 font-semibold py-4`}
        >
          Download App
        </button>
      </div>
    </nav>
  );
};

export default Nav;
