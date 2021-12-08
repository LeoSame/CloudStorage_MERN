import React, { useState } from 'react';
import Input from '../../utils/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import Loader from '../../utils/loader/Loader';
import styles from './Authorization.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state.app.loader);

  if (isLoader === true) {
    return <Loader />;
  }

  return (
    <div className={styles.authorization}>
      <div className={styles.header}>Авторизація</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введіть email...' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введіть пароль...' />
      <button className={styles.btn} onClick={() => dispatch(login(email, password))}>
        Войти
      </button>
    </div>
  );
};

export default Login;
