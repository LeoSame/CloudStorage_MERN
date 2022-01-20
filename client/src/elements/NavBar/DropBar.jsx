import React from 'react';
import styles from './DropBar.module.scss';

const DropBar = ({ children, width, visible, setVisibleDropBar }) => {
  document.onclick = function () {
    setVisibleDropBar(false);
  };
  document.onscroll = function () {
    setVisibleDropBar(false);
  };
  return (
    <div className={`${styles.bar} ${visible && styles.active}`} onClick={e => e.stopPropagation()}>
      <div className={styles.arrow}></div>
      <nav style={{ width: width }} className={styles.menu}>
        <ul>
          <li>Личные данные</li>
          <li>Заказы</li>
          <li>Список желаний</li>
          <li>Админ панель</li>
          <li>Выйти</li>
        </ul>
        {children}
      </nav>
    </div>
  );
};

export default DropBar;
