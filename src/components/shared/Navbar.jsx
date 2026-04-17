import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png'
import homeicon from '../../../assets/images/Vector (4).png'
import timelineicon from '../../../assets/images/Vector (5).png'
import statsicon from '../../../assets/images/Vector (6).png'
import { NavLink } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='shadow'>

      <div className='flex justify-between items-center container mx-auto px-4'>

        {/* LOGO */}
        <img className='py-6' src={logo} alt="" />

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-2xl'
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <div className='hidden md:block'>
          <ul className='flex items-center py-6 gap-4'>

            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `${isActive ? "bg-[#244D3F] text-amber-50" : ""} flex p-2 gap-2 items-center rounded-[10px]`
                }
              >
                <img src={homeicon} alt="" /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/timeline'}
                className={({ isActive }) =>
                  `${isActive ? "bg-[#244D3F] text-amber-50" : ""} flex p-2 gap-2 items-center rounded-[10px]`
                }
              >
                <img src={timelineicon} alt="" /> Timeline
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/stats'}
                className={({ isActive }) =>
                  `${isActive ? "bg-[#244D3F] text-amber-50" : ""} flex p-2 gap-2 items-center rounded-[10px]`
                }
              >
                <img src={statsicon} alt="" /> Stats
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

      {/* MOBILE VIEW*/}
      {
        open && (
          <div className='md:hidden  px-4 pb-4'>
            <ul className='flex flex-col gap-3'>

              <li>
                <NavLink to={'/'} onClick={() => setOpen(false)}
                  className="flex p-2 gap-2 items-center rounded-[10px]"
                >
                  <img src={homeicon} alt="" /> Home
                </NavLink>
              </li>

              <li>
                <NavLink to={'/timeline'} onClick={() => setOpen(false)}
                  className="flex p-2 gap-2 items-center rounded-[10px]"
                >
                  <img src={timelineicon} alt="" /> Timeline
                </NavLink>
              </li>

              <li>
                <NavLink to={'/stats'} onClick={() => setOpen(false)}
                  className="flex p-2 gap-2 items-center rounded-[10px]"
                >
                  <img src={statsicon} alt="" /> Stats
                </NavLink>
              </li>

            </ul>
          </div>
        )
      }

    </nav>
  );
};

export default Navbar;