import React, { useState } from 'react';
import Input from '../../../elements/Input/Input';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/user';
import Loader from '../../../elements/Loader/Loader';
import Button from '../../../elements/Button/Button';
import styles from './Forms.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state.app.loader);
  const history = useHistory();

  if (isLoader === true) {
    return <Loader />;
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введіть email...' />
        <Input
          value={password}
          setValue={setPassword}
          type='password'
          autoComplete='on'
          placeholder='Введіть пароль...'
        />
        <Button className={styles.btn} onClick={() => dispatch(login(email, password, history))}>
          Вхід
        </Button>
      </form>
    </div>
  );
};

export default Login;
