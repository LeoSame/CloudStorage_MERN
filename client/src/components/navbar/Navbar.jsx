import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/img/navbar-logo.svg';
import avatarLogo from '../../assets/img/avatar.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { getFiles, searchFiles } from '../../actions/file';
import { API_URL } from '../../config';

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const currentDir = useSelector(state => state.files.currentDir);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(false);
  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo;

  function searchChangeHandler(value) {
    setSearchName(value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }

    if (value !== '') {
      setSearchTimeout(
        setTimeout(
          value => {
            dispatch(searchFiles(value));
          },
          500,
          value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <div className='navbar'>
      <div className='container'>
        <img src={Logo} alt='' className='navbar__logo' />
        <div className='navbar__header'>MERN CLOUD</div>
        {isAuth && (
          <input
            value={searchName}
            onChange={e => searchChangeHandler(e.target.value)}
            type='text'
            className='navbar__search'
            placeholder='Название файла...'
          />
        )}
        {isAuth ? (
          <>
            <div className='navbar__login' onClick={() => dispatch(logout())}>
              Выход
            </div>
            <NavLink to='/profile'>
              <img className='navbar__avatar' src={avatar} alt='' />
            </NavLink>
          </>
        ) : (
          <>
            <div className='navbar__registration'>
              <NavLink to='/registration'>Регистрация</NavLink>
            </div>
            <div className='navbar__login'>
              <NavLink to='/login'>Войти</NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
