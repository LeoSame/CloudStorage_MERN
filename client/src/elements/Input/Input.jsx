import React from 'react';
import PropTypes from 'prop-types';
import './Input.module.scss';

const Input = ({ setValue, value, type, placeholder, ...props }) => {
  return (
    <input
      {...props}
      className='input'
      onChange={event => setValue(event.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  props: {},
};

export default Input;
