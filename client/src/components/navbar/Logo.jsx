import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/img/navbar-logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <div className={styles.logoContainer}>
        <img src={imgLogo} alt='site logo' className={styles.logo} width='45' height='45' />
        <div className={styles.header}>MERN CLOUD</div>
      </div>
    );
  } else {
    return (
      <NavLink className={styles.logoLink} to='/'>
        <div className={styles.logoContainer}>
          <img src={imgLogo} alt='site logo' className={styles.logo} width='45' height='45' />
          <div className={styles.header}>MERN CLOUD</div>
        </div>{' '}
      </NavLink>
    );
  }
};

export default Logo;
