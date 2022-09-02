import { useState } from "react";
import logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    setNav(false);
  };
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
          <Link to='/'>
            <h4 className='my-5' onClick={closeNav}>
              Home
            </h4>
          </Link>
          <a href='#feature'>
            <h4 className='my-5' onClick={closeNav}>
              Feature
            </h4>
          </a>
          <Link to='/contact'>
            <h4 className='my-5' onClick={closeNav}>
              Contact Us
            </h4>
          </Link>
          {/* <Link to='faq'>
            <h4 className='my-5' onClick={closeNav}>
              FAQ
            </h4>
          </Link> */}
          <Link to='/vendor'>
            <h4 className='my-5' onClick={closeNav}>
              Become a Vendor
            </h4>
          </Link>
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
