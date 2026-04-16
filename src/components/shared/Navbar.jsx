import React from 'react';
import logo from '../../../assets/images/logo.png'
import homeicon from '../../../assets/images/Vector (1).png'
import timelineicon from '../../../assets/images/Vector (2).png'
import statsicon from '../../../assets/images/Vector (3).png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className='shadow'>

      <div className='flex justify-between  container mx-auto'>
        <img className='py-6' src={logo} alt="" />
        <div>
          <ul className='flex items-center py-6  gap-4  '>
            <li>
              <NavLink to={'/'} className= {({isActive}) => `${isActive ? "bg-[#244D3F]  text-amber-50" : ""} flex p-2 gap-2 items-center rounded-[10px]`  }> <img src={homeicon} alt="" /> Home</NavLink>
            </li>
            <li>
              <NavLink to={'/timeline'}  className= {({isActive}) => `${isActive ? "bg-[#244D3F] text-amber-50 " : ""} flex p-2 gap-2 items-center rounded-[10px]`  } > <img src={timelineicon} alt="" />Timeline</NavLink>
            </li>
            <li>
              <NavLink to={'/stats'} className= {({isActive}) => `${isActive ? "bg-[#244D3F] text-amber-50 " : ""} flex p-2 gap-2 items-center rounded-[10px]`  }> <img src={statsicon} alt="" /> Stats</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;