import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { closeLogo } from '../../assets/img/closeLogo';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ children, title, modalHandler, confirmBtn, cancelBtn, confirmAction, confirmDisabled }) => {
  const [opacityStyle, setOpacityStyle] = useState({});
  const [mouseDownContant, setMouseDownContant] = useState(false);

  useEffect(() => {
    document.body.classList.add('lock');
    setOpacityStyle({ visibility: 'visible', opacity: 1 });
    return function cleanup() {
      document.body.classList.remove('lock');
    };
  }, []);

  function closeModal() {
    modalHandler();
  }

  return (
    <div
      className={styles.modalFade}
      onClick={() => {
        if (!mouseDownContant) {
          closeModal();
        } else {
          setMouseDownContant(false);
        }
      }}
      style={opacityStyle}
    >
      <div
        className={styles.content}
        onClick={event => event.stopPropagation()}
        onMouseDown={() => setMouseDownContant(true)}
        onMouseUp={() => setMouseDownContant(false)}
      >
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

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  modalHandler: PropTypes.func.isRequired,
  confirmAction: PropTypes.func,
  confirmBtn: PropTypes.string,
  cancelBtn: PropTypes.string,
  confirmDisabled: PropTypes.bool,
};

Modal.defaultProps = { confirmAction: e => e, confirmBtn: undefined, cancelBtn: undefined, confirmDisabled: false };

export default Modal;
