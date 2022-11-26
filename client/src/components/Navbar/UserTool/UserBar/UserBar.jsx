import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import DropBar from '../../../../elements/DropBar/DropBar';
import sizeFormat from '../../../../utils/sizeFormat';
import { dir, score, tarif, settings, lang, goOut } from '../../../../assets/img/userBar';
import { logout } from '../../../../reducers/userReducer';
import styles from './UserBar.module.scss';

const menuLinks = [
  { title: 'Мої файли', ico: dir, link: '/files' },
  { title: 'Поповнити рахунок', ico: score, link: '/' },
  { title: 'Тарифи', ico: tarif, link: '/' },
  { title: 'Налаштування', ico: settings, link: '/account' },
  { title: 'Мова', ico: lang, link: '/' },
];

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
          {menuLinks.map(menuLink => {
            return (
              <li>
                <NavLink className={styles.menuLink} to={menuLink.link} onClick={() => setVisibleDropBar(false)}>
                  {menuLink.ico()}
                  <span className={styles.menuText}>{menuLink.title}</span>
                </NavLink>
              </li>
            );
          })}
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
