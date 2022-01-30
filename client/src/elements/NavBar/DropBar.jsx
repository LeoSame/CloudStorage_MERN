import React from 'react';
import { useState } from 'react';
import styles from './DropBar.module.scss';

const DropBar = ({ children, width, visible, setVisibleDropBar }) => {
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 100);

  document.onclick = function () {
    setVisibleDropBar(false);
  };
  document.onscroll = function () {
    setVisibleDropBar(false);
  };
  return (
    <div className={`${styles.bar} ${delay && visible && styles.active}`} onClick={e => e.stopPropagation()}>
      <div className={styles.arrow}></div>
      <nav style={{ width: width }} className={styles.menu}>
        {children}
      </nav>
    </div>
  );
};

export default DropBar;
