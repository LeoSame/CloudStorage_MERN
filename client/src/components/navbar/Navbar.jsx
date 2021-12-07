import React from 'react';
import avatarLogo from '../../assets/img/avatar.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { API_URL } from '../../config';
import Logo from './Logo';
import FileSearch from '../disk/file.search/FileSearch';
import './navbar.css';

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo;

  return (
    <div className='navbar'>
      <div className='container'>
        <Logo />
        {isAuth && <FileSearch />}
        {isAuth ? (
          <div className='navbar__user'>
            <div className='navbar__link' onClick={() => dispatch(logout())}>
              Выход
            </div>
            <NavLink to='/profile'>
              <img className='navbar__avatar' src={avatar} alt='' />
            </NavLink>
          </div>
        ) : (
          <div className='navbar__user'>
            <NavLink className='navbar__link' to='/registration'>
              Регистрация
            </NavLink>
            <NavLink className='navbar__link' to='/login'>
              Войти
            </NavLink>
            <NavLink to='/profile'>
              <img className='navbar__avatar' src={avatar} alt='' />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
