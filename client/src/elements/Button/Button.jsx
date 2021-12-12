import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant, onClick, disabled, type, className, children }) => {
  let styleClass = '';

  if (variant === 'outline') {
    styleClass = `${styles.button} ${styles.outline}`;
  } else if (variant === 'drop') {
    styleClass = `${styles.button} ${styles.drop}`;
  } else {
    styleClass = `${styles.button}`;
  }

  return (
    <button type={type} className={`${styleClass} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
  disabled: false,
  type: 'button',
  onClick: e => {
    return e;
  },
  className: '',
};

export default Button;
