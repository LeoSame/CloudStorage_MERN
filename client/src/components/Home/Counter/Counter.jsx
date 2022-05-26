import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesCount } from '../../../actions/disk';
import styles from './Counter.module.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const filesCount = useSelector(state => state.files.filesCount);
  const [out, setOut] = useState(0);

  setTimeout(() => {
    setOut(out + 1);
  }, 4000);

  useEffect(() => {
    dispatch(getFilesCount());
  }, [dispatch, out]);

  let countArr = () => {
    let arr = Array.from(String(filesCount), Number);
    while (arr.length <= 9) {
      arr.unshift(0);
    }
    return arr;
  };

  let numbers = countArr().map((number, i) => {
    let cell = [];
    for (let n = 0; n <= 9; n++) {
      cell.push(
        <div key={'number' + n} className={styles.number}>
          {n}
        </div>
      );
    }
    return (
      <div key={'numbersColumn' + i} style={{ bottom: `calc(${+number} * 1.7em)` }} className={styles.numbersColumn}>
        {cell}
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.numberPanel}>
        <div className={styles.slice}>{numbers}</div>
      </div>
      <div className={styles.title}>Файлів завантажено</div>
    </div>
  );
};

export default Counter;
