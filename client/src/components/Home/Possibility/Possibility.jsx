import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '../../../elements/Tooltip/Tooltip';
import styles from './Possibility.module.scss';

const Possibility = () => {
  let hint = (
    <div>
      <p>Завантажуйте і надсилайте будь-які файли навіть без реєстрації</p>
      <p className='possibility__hint-link'>Додати файли анонімно</p>
    </div>
  );
  const possibilitys = [
    { sequnce: 1, title: '1 ТБ від 60 грн. на місяць', link: '/files', hint: '' },
    { sequnce: 2, title: 'Анонімний обмін файлами', link: '/files', hint },
    {
      sequnce: 3,
      title: 'Резервування даних',
      link: '',
      hint: 'Для усіх файлів на платному тарифі створюються резервні копії',
    },
    {
      sequnce: 4,
      title: 'Відтворення файлів онлайн',
      link: '',
      hint: 'Фото, відео, аудіо можна дивитися і слухати просто у браузері та в додатках CD ID',
    },
    { sequnce: 5, title: 'Робота з великими файлами', link: '', hint: 'Зберігайте і передавайте файли до 200 ГБ' },
    { sequnce: 6, title: 'Оплата через термінали', link: '/files', hint: '' },
  ];

  const width = `calc((100% / ${possibilitys.length}) - 10px)`;

  const possibList = possibilitys.map(p => {
    const content = <div className={styles.content}>{p.title}</div>;
    let linkItem = p.hint ? (
      <Tooltip
        minWidth={200}
        content={p.hint}
        fadeDuration={300}
        placement='top'
        background='white'
        border='white'
        color='black'
      >
        {content}
      </Tooltip>
    ) : (
      content
    );
    if (p.link) {
      linkItem = (
        <NavLink to={p.link} className={styles.link}>
          {linkItem}
        </NavLink>
      );
    }
    return (
      <li key={p.sequnce} className={styles.item} style={{ width }}>
        {linkItem}
      </li>
    );
  });

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>{possibList}</ul>
    </nav>
  );
};

export default Possibility;
