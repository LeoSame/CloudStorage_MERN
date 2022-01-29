import React from 'react';
import { useSelector } from 'react-redux';
import DropBar from '../../../../elements/NavBar/DropBar';
import sizeFormat from '../../../../utils/sizeFormat';
import styles from './UserBar.module.scss';

const UserBar = ({ visibleDropBar, setVisibleDropBar, avatarLogo }) => {
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
        <li>Мої файли</li>
        <li>Поповнити рахунок</li>
        <li>Тарифи</li>
        <li>Налаштування</li>
        <li>Мова</li>
        <li>Вийти</li>
      </ul>
    </DropBar>
  );
};

export default UserBar;
