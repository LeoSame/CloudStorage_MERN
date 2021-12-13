import React from 'react';
import avatarLogo from '../../assets/img/avatar.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { API_URL } from '../../config';
import Logo from './Logo/Logo';
import styles from './Navbar.module.scss';
import Container from '../../elements/Container/Container';

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo;

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <Logo />
          {isAuth ? (
            <div className={styles.user}>
              <div className={styles.link} onClick={() => dispatch(logout())}>
                Вихід
              </div>
              <NavLink to='/profile'>
                <img className={styles.avatar} src={avatar} alt='' />
              </NavLink>
            </div>
          ) : (
            <div className={styles.user}>
              <NavLink className={styles.link} to='/registration'>
                Реєстрація
              </NavLink>
              <NavLink className={styles.link} to='/login'>
                Вхід
              </NavLink>
              <NavLink to='/profile'>
                <img className={styles.avatar} src={avatar} alt='' />
              </NavLink>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
