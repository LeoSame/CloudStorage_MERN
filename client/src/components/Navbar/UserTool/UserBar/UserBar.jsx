import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DropBar from '../../../../elements/NavBar/DropBar';
import sizeFormat from '../../../../utils/sizeFormat';
import { dir } from '../../../../assets/img/userBar/dir';
import { score } from '../../../../assets/img/userBar/score';
import { tarif } from '../../../../assets/img/userBar/tarif';
import { settings } from '../../../../assets/img/userBar/settings';
import { lang } from '../../../../assets/img/userBar/lang';
import { goOut } from '../../../../assets/img/userBar/goOut';
import styles from './UserBar.module.scss';
import { logout } from '../../../../reducers/userReducer';

const UserBar = ({ visibleDropBar, setVisibleDropBar, avatarLogo }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <DropBar visible={visibleDropBar} width={280} setVisibleDropBar={setVisibleDropBar}>
      <ul className={styles.menu}>
        <li className={styles.userInfo}>
          <section>
            <div className={styles.flexContainer}>
              <div className={styles.avatarLogo}>{avatarLogo}</div>
              <h4 className={styles.userName}>{currentUser.fullName}</h4>
            </div>
            <p className={styles.spaceInfo}>
              На диску залишилось: <span className={styles.space}>{sizeFormat(currentUser.diskSpace)}</span>
            </p>
          </section>
        </li>
        <li>
          <NavLink className={styles.logoLink} to='/'>
            {dir()}
            <span className={styles.itemText}>Мої файли</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.logoLink} to='/'>
            {score()}
            <span className={styles.itemText}>Поповнити рахунок</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.logoLink} to='/'>
            {tarif()}
            <span className={styles.itemText}>Тарифи</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.logoLink} to='/'>
            {settings()}
            <span className={styles.itemText}>Налаштування</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.logoLink} to='/'>
            {lang()}
            <span className={styles.itemText}>Мова</span>
          </NavLink>
        </li>
        <li className={styles.goOut}>
          <span className={styles.logoLink} onClick={() => dispatch(logout())}>
            {goOut()}
            <span className={styles.itemText}>Вийти</span>
          </span>
        </li>
      </ul>
    </DropBar>
  );
};

export default UserBar;
