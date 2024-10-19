import React, { useEffect } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);
    let logo = "/logo192.png";




    const handleDropdown = () => {
      setDropdown(!dropdown);  // Toggle the dropdown visibility
    };



  return (
    <>
      <div className='bg-gradient-to-b from-slate-400 to text-slate-900 p-5 flex justify-between'>
        <div className="left-div px-5">
        <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="CookBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
              Umar Qazi
            </span>
          </NavLink>
        </div>
        <div className="right-div px-5">
            <ul className='md:flex justify-center items-center hidden'>
                <NavLink to="/" className='px-7 py-2 rounded-full'>Home</NavLink>
                <NavLink to="/projects" className='px-7 py-2 rounded-full'>Projects</NavLink>
                <NavLink to="/experience" className='px-7 py-2 rounded-full'>Experience</NavLink>
                <NavLink to="/contact" className='px-7 py-2 rounded-full'>Contact</NavLink>
            </ul>
            <CiMenuFries className='text-xl md:hidden block text-black cursor-pointer' onClick={() => setToggle(!toggle)} />
        </div>

        {/* sidebar */}
        <div className={`sidebar-main-container transition-all text-white w-full h-screen bg-black bg-opacity-30 fixed top-0 z-30 ${toggle ? "right-0 duration-500 ease-in" : "right-[-100%] duration-300 ease-in-out"} flex justify-end`}
        onClick={() => setToggle(!toggle)}
        >
            <div className="child w-48 h-full bg-black flex justify-center items-center">
                <ul className='flex flex-col gap-4'>
                    <NavLink to="/" className='text-xl px-7 py-2 rounded-full'
                    onClick={() => setToggle(!toggle)}
                    
                    >Home</NavLink>
                    <NavLink to="/recipes" className='text-xl px-7 py-2 rounded-full'
                    onClick={() => setToggle(!toggle)}
                    >Projects</NavLink>
                    <NavLink to="/favorites" className='text-xl px-7 py-2 rounded-full '
                    onClick={() => setToggle(!toggle)}
                    >Experience</NavLink>
                    <NavLink to="/tools" className='text-xl px-7 py-2 rounded-full'
                    onClick={() => setToggle(!toggle)}
                    >Contact</NavLink>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;