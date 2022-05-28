import React from 'react';
import { useHistory } from 'react-router-dom';
import { videoAbout } from '../../assets/img/videoAbout';
import Button from '../../elements/Button/Button';
import Container from '../../elements/Container/Container';
import Counter from './Counter/Counter';
import Possibility from './Possibility/Possibility';
import banerAnonim from '../../assets/baner-user-anonim.jpg';
import { navbarLogo } from '../../assets/img/navbarLogo';
import { listItemIco } from '../../assets/img/listItemIco';
import styles from './Home.module.scss';

const Home = () => {
  const userAnonimList = [
    'Вбудований плеєр',
    'Підтримка багатьох форматів файлів',
    'TLS / SSL шифрування',
    'Файли із загальним доступом',
    'Доступ з будь-якого пристрою',
    'Загальні папки',
  ];
  const history = useHistory();

  return (
    <main>
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
          <div className={styles.userAnonim}>
            <div className={styles.userAnonim__content}>
              {navbarLogo('', '3.3em', '3.3em')}
              <h3 className={styles.userAnonim__title}>Зберігайте до 50 GB безкоштовно</h3>
              <p className={styles.userAnonim__subTitle}>Більше 20 000 000 користувачів довірили нам свої файли</p>
              <ul className={styles.userAnonim__list}>
                {userAnonimList.map(i => {
                  return (
                    <li>
                      {listItemIco(styles.userAnonim__itemIco)}
                      {i}
                    </li>
                  );
                })}
              </ul>
              <Button onClick={() => history.push('/registration')} className={styles.userAnonim__btn}>
                Зареєструватися
              </Button>
              <p className={styles.userAnonim__subTitle}>Кредитна карта не потрібна</p>
            </div>
            <img src={banerAnonim} alt='User anonim baner' className={styles.userAnonim__image} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
