import React from 'react';
import Logo from './Logo/Logo';
import Container from '../../elements/Container/Container';
import styles from './Navbar.module.scss';
import UserTool from './UserTool/UserTool';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <Logo />
          <UserTool />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
