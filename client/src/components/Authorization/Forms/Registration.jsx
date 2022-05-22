import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../../elements/Input/Input';
import { registration } from '../../../actions/user';
import Button from '../../../elements/Button/Button';
import styles from './Forms.module.scss';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
        <Input value={fullName} setValue={setFullName} type='text' placeholder="Введіть Ваше ім'я..." />
        <Button className={styles.btn} onClick={() => registration(email, password, fullName, history)}>
          Зареєструватись
        </Button>
      </form>
    </div>
  );
};

export default Registration;
