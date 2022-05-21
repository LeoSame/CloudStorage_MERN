import React, { useState } from 'react';
import Input from '../../elements/Input/Input';
import { registration } from '../../actions/user';
import styles from './Authorization.module.scss';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.authorization}>
      <div className={styles.header}>Реєстрація</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введіть email...' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введіть пароль...' />
      <Input value={fullName} setValue={setFullName} type='text' placeholder="Введіть Ваше ім'я..." />
      <button className={styles.btn} onClick={() => registration(email, password, fullName)}>
        Зареєструватись
      </button>
    </div>
  );
};

export default Registration;
