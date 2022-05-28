import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navbarLogo } from '../../../assets/img/navbarLogo';
import styles from './Logo.module.scss';

const Logo = () => {
  const location = useLocation();
  const logo = (
    <div className={styles.logoContainer}>
      {navbarLogo(styles.logo, 40, 40)}
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
