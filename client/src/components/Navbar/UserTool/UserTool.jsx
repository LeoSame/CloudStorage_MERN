import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../reducers/userReducer';
import { API_URL } from '../../../config';
import { avatarDefault } from '../../../assets/img/avatarDefault.jsx';
import { avatarWoman } from '../../../assets/img/avatarWoman.jsx';
import { avatarMan } from '../../../assets/img/avatarMan.jsx';
import styles from './UserTool.module.scss';

const UserTool = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  let avatarLogo = null;

  if (currentUser.gender === 'woman') {
    avatarLogo = avatarWoman();
  } else if (currentUser.gender === 'man') {
    avatarLogo = avatarMan();
  } else if (isAuth) {
    avatarLogo = avatarDefault();
  } else {
    avatarLogo = avatarDefault('#afafaf');
  }

  return (
    <div>
      {isAuth ? (
        <div className={styles.user}>
          <div className={styles.link} onClick={() => dispatch(logout())}>
            Вихід
          </div>
          <NavLink to='/profile'>
            {currentUser.avatar ? (
              <img className={styles.avatar} src={API_URL + currentUser.avatar} alt='Avatar' />
            ) : (
              <div className={styles.avatarLogo}>{avatarLogo}</div>
            )}
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
            <div className={styles.avatarLogo}>{avatarLogo}</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserTool;
