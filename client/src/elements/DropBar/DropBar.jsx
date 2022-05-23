import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropBar.module.scss';

const DropBar = ({ children, width, visible, setVisibleDropBar }) => {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    setDelay(true);
  }, []);

  document.onclick = function () {
    setVisibleDropBar(false);
  };
  document.onscroll = function () {
    setVisibleDropBar(false);
  };
  return (
    <div className={`${styles.bar} ${delay && visible && styles.active}`} onClick={e => e.stopPropagation()}>
      <div className={styles.arrow}></div>
      <div style={{ width: width }} className={styles.menu}>
        {children}
      </div>
    </div>
  );
};

DropBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  visible: PropTypes.bool.isRequired,
  setVisibleDropBar: PropTypes.func.isRequired,
  width: PropTypes.number,
};

DropBar.defaultProps = { width: 200 };

export default DropBar;
