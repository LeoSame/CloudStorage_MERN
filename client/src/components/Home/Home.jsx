import React from 'react';
import { videoAbout } from '../../assets/img/videoAbout';
import Button from '../../elements/Button/Button';
import Container from '../../elements/Container/Container';
import Counter from './Counter/Counter';
import styles from './Home.module.scss';
import Possibility from './Possibility/Possibility';

const Home = () => {
  return (
    <section className={styles.about__project}>
      <Container>
        <div className={styles.about__place}>
          <div className={styles.about__video}>
            <div className={styles.about__ico}>{videoAbout()}</div>
            <div className={styles.video__content}>Про проект</div>
          </div>
          <h1 className={styles.title}>Сервіс збереження та передачі файлів</h1>
          <Counter />
          <div className={styles.file__btns}>
            <Button className={styles.file__btn}>Передати файли</Button>
            <Button className={styles.file__btn}>Отримати файли</Button>
          </div>
        </div>
        <Possibility />
      </Container>
    </section>
  );
};

export default Home;
