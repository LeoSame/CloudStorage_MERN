import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/img/navbar-logo.svg';

const Logo = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <div className='navbar__logo-container'>
        <img src={imgLogo} alt='site logo' className='navbar__logo' width='45' height='45' />
        <div className='navbar__header'>MERN CLOUD</div>
      </div>
    );
  } else {
    return (
      <NavLink className='navbar__logo-link' to='/'>
        <div className='navbar__logo-container'>
          <img src={imgLogo} alt='site logo' className='navbar__logo' width='45' height='45' />
          <div className='navbar__header'>MERN CLOUD</div>
        </div>{' '}
      </NavLink>
    );
  }
};

export default Logo;
