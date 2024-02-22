import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import chezResume from '../Nav/resume.pdf';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
    <Menu right>
      <NavLink to='/' className='bm-item'>
        Home
      </NavLink>
      <NavLink to='/about' className='bm-item'>
        About
      </NavLink>
      <NavLink to='/work' className='bm-item'>
        Projects
      </NavLink>
      <NavLink to='/contact' className='bm-item'>
        Contact
      </NavLink>
      <Link
        to={chezResume}
        target='_blank'
        rel='noopener noreferrer'
      >
        Resume
      </Link>
    </Menu>
  );
};

export default MobileMenu;
