import React, { useState } from 'react';
import Input from '../../utils/input/Input';
import { registration } from '../../actions/user';
import styles from './Authorization.module.scss';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.authorization}>
      <div className={styles.header}>Реєстрація</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введіть email...' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введіть пароль...' />
      <button className={styles.btn} onClick={() => registration(email, password)}>
        Зареєструватись
      </button>
    </div>
  );
};

export default Registration;
