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
        {children}
      </nav>
    </div>
  );
};

export default DropBar;
