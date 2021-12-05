import React, { useState } from 'react';
import './authorization.css';
import Input from '../../utils/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import Loader from '../../utils/loader/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state.app.loader);

  if (isLoader === true) {
    return <Loader />;
  }

  return (
    <div className='authorization'>
      <div className='authorization__header'>Авторизация</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введите email...' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль...' />
      <button className='authorization__btn' onClick={() => dispatch(login(email, password))}>
        Войти
      </button>
    </div>
  );
};

export default Login;
