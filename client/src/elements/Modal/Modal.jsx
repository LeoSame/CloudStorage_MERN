import React, { useEffect, useState } from 'react';
import { closeLogo } from '../../assets/img/closeLogo';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ children, title, modalHandler, confirmBtn, cancelBtn, confirmAction, confirmDisabled }) => {
  const [opacityStyle, setOpacityStyle] = useState({});

  setTimeout(() => {
    setOpacityStyle({ visibility: 'visible', opacity: 1 });
  }, 10);

  useEffect(() => {
    document.body.classList.add('lock');
    return function cleanup() {
      document.body.classList.remove('lock');
    };
  }, []);

  function closeModal() {
    modalHandler();
  }

  return (
    <div className={styles.modalFade} onClick={() => closeModal()} style={opacityStyle}>
      <div className={styles.content} onClick={event => event.stopPropagation()}>
        <div className={styles.close}>{closeLogo(closeModal)}</div>
        <header>
          <h3 className={styles.title}>{title}</h3>
        </header>
        {children}
        <div className={styles.buttons}>
          {cancelBtn && (
            <Button onClick={() => closeModal()} variant='drop' className={styles.button}>
              {cancelBtn}
            </Button>
          )}
          {confirmBtn && (
            <Button onClick={() => confirmAction()} className={styles.button} disabled={confirmDisabled}>
              {confirmBtn}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
