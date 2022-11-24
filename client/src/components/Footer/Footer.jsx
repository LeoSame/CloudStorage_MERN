import React from 'react';
import Container from '../../elements/Container/Container';
import { android } from '../../assets/img/footer/android';
import qr from '../../assets/qr.gif';

import styles from './Footer.module.scss';
import { apple } from '../../assets/img/footer/apple';
import Tooltip from '../../elements/Tooltip/Tooltip';
import { facebook } from '../../assets/img/footer/social/facebook';
import { instagram } from '../../assets/img/footer/social/instagram';
import { telegram } from '../../assets/img/footer/social/telegram';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <section className={styles.site}>
            <h6 className={styles.title}>
              <span className={styles.siteTitle}>cloud-storrage.herokuapp.com</span>
            </h6>
            <ul>
              <li>
                <a href='/' target='blank' className={styles.pricingLink}>
                  Тарифні плани
                </a>
              </li>
              <li>
                <div className={styles.apps}>
                  <Tooltip
                    minWidth={100}
                    content={<img src={qr} alt='qr' width={120} height={120} />}
                    fadeDuration={300}
                    placement='top'
                    background='white'
                    border='white'
                  >
                    <a href='/' target='blanc'>
                      {android()}
                    </a>
                  </Tooltip>
                  <Tooltip
                    minWidth={100}
                    content={<img src={qr} alt='qr' width={120} height={120} />}
                    fadeDuration={300}
                    placement='top'
                    background='white'
                    border='white'
                  >
                    <a href='/' target='blanc'>
                      {apple()}
                    </a>
                  </Tooltip>
                </div>
              </li>
            </ul>
          </section>
          <section className={styles.company}>
            <h6 className={styles.title}>Компанія</h6>
            <ul>
              <li>
                <a href='/' target='blank' className={styles.pricingLink}>
                  Зв'язатись з нами
                </a>
              </li>
              <li>
                <a href='/' target='blank' className={styles.pricingLink}>
                  Довідковий центр
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h6 className={styles.title}>Наші продукти</h6>
          </section>
          <section>
            <h6 className={styles.title}>Стежте за нами</h6>
            <ul className={styles.socialList}>
              <li>
                <a href='/' target='blank'>
                  {facebook()}
                </a>
              </li>
              <li>
                <a href='/' target='blank'>
                  {instagram()}
                </a>
              </li>
              <li>
                <a href='/' target='blank'>
                  {telegram()}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
