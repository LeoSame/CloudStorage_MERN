import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../../assets/img/navbar-logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  const location = useLocation();
  const logo = (
    <div className={styles.logoContainer}>
      <img src={imgLogo} alt='site logo' className={styles.logo} width='40' height='40' />
      <div className={styles.header}>MERN CLOUD</div>
    </div>
  );

  if (location.pathname === '/') {
    return logo;
  } else {
    return (
      <NavLink className={styles.logoLink} to='/'>
        {logo}
      </NavLink>
    );
  }
};

export default Logo;
