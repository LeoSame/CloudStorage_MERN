import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, onClick, type, className, children, ...props }) => {
  let styleClass = '';

  if (variant === 'black') {
    styleClass = `global-button global-btn-black`;
  } else if (variant === 'outline') {
    styleClass = `global-button global-btn-outline`;
  } else if (variant === 'drop') {
    styleClass = `global-button global-btn-drop`;
  } else {
    styleClass = `global-button`;
  }

  return (
    <button {...props} type={type} className={`${styleClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
  type: 'button',
  onClick: e => {
    return e;
  },
  className: '',
};

export default Button;
