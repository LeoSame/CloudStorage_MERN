import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLogo } from '../../assets/img/closeLogo';
import { setModalDisplay } from '../../reducers/appReducer';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ children, title, confirmBtn, cancelBtn, confirmAction, confirmDisabled }) => {
  const modalDisplay = useSelector(state => state.app.modalDisplay);
  const dispatch = useDispatch();

  function closePopup() {
    dispatch(setModalDisplay('none'));
  }

  return (
    <div className={styles.popup} onClick={() => closePopup()} style={{ display: modalDisplay }}>
      <div className={styles.content} onClick={event => event.stopPropagation()}>
        <div className={styles.close}>{closeLogo(closePopup)}</div>
        <header>
          <h3 className={styles.title}>{title}</h3>
        </header>
        {children}
        <div className={styles.buttons}>
          {cancelBtn && (
            <Button onClick={() => closePopup()} variant='drop' className={styles.button}>
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
