import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tooltip from 'react-simple-tooltip';
import { API_URL } from '../../../config';
import { avatarDefault } from '../../../assets/img/avatarDefault.jsx';
import { avatarWoman } from '../../../assets/img/avatarWoman.jsx';
import { avatarMan } from '../../../assets/img/avatarMan.jsx';
import styles from './UserTool.module.scss';
import UserBar from './UserBar/UserBar';

const UserTool = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const [visibleDropBar, setVisibleDropBar] = useState(false);

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

  const avatarHandler = e => {
    document.onclick();
    if (!visibleDropBar) {
      e.stopPropagation();
      setVisibleDropBar(true);
    } else {
      setVisibleDropBar(false);
    }
  };

  return (
    <div>
      {isAuth ? (
        <div className={styles.user}>
          <div className={styles.dropBar}>
            {currentUser.avatar ? (
              <img className={styles.avatar} src={API_URL + currentUser.avatar} alt='Avatar' />
            ) : (
              <div onClick={e => avatarHandler(e)} className={styles.avatarLogo}>
                {avatarLogo}
              </div>
            )}
            <UserBar visibleDropBar={visibleDropBar} setVisibleDropBar={setVisibleDropBar} avatarLogo={avatarLogo} />
          </div>
        </div>
      ) : (
        <div className={styles.user}>
          <NavLink className={styles.link} to='/registration'>
            Реєстрація
          </NavLink>
          <NavLink className={styles.link} to='/login'>
            Вхід
          </NavLink>
          <div>
            <Tooltip
              content='Анонімний користувач'
              fadeDuration={300}
              fadeEasing='linear'
              fixed={true}
              placement='bottom'
              radius={5}
            >
              <div className={styles.avatarLogo}>{avatarLogo}</div>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTool;
