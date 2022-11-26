import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import DropBar from '../../../../elements/DropBar/DropBar';
import sizeFormat from '../../../../utils/sizeFormat';
import { dir, score, tarif, settings, lang, goOut } from '../../../../assets/img/userBar';
import { logout } from '../../../../reducers/userReducer';
import styles from './UserBar.module.scss';

const UserBar = ({ visibleDropBar, setVisibleDropBar, avatarLogo }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const history = useHistory();
  const exitOut = () => {
    dispatch(logout());
    setVisibleDropBar(false);
    history.push('/');
  };
  return (
    <DropBar visible={visibleDropBar} width={280} setVisibleDropBar={setVisibleDropBar}>
      <nav>
        <ul>
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
            <NavLink className={styles.menuLink} to='/files' onClick={() => setVisibleDropBar(false)}>
              {dir()}
              <span className={styles.menuText}>Мої файли</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.menuLink} to='/' onClick={() => setVisibleDropBar(false)}>
              {score()}
              <span className={styles.menuText}>Поповнити рахунок</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.menuLink} to='/' onClick={() => setVisibleDropBar(false)}>
              {tarif()}
              <span className={styles.menuText}>Тарифи</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.menuLink} to='/account' onClick={() => setVisibleDropBar(false)}>
              {settings()}
              <span className={styles.menuText}>Налаштування</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.menuLink} to='/' onClick={() => setVisibleDropBar(false)}>
              {lang()}
              <span className={styles.menuText}>Мова</span>
            </NavLink>
          </li>
          <li className={styles.goOut}>
            <span
              className={styles.menuLink}
              onClick={() => {
                exitOut();
              }}
            >
              {goOut()}
              <span className={styles.menuText}>Вийти</span>
            </span>
          </li>
        </ul>
      </nav>
    </DropBar>
  );
};

UserBar.propTypes = {
  visibleDropBar: PropTypes.bool.isRequired,
  setVisibleDropBar: PropTypes.func.isRequired,
  avatarLogo: PropTypes.object.isRequired,
};

export default UserBar;
