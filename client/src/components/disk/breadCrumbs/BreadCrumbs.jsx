import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { breadCrumbDir } from '../../../assets/img/breadCrumbDir.jsx';
import { rightArrow } from '../../../assets/img/rightArrow.jsx';
import { setCurrentDir } from '../../../reducers/fileReducer.js';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const dirStack = useSelector(state => state.files.dirStack);
  const dispatch = useDispatch();

  function сlickHandler(dirId, isLastDir) {
    if (isLastDir) {
      dirStack.pop();
      let backDir = dirStack[dirStack.length - 1];
      while (dirId !== backDir.id) {
        backDir = dirStack.pop();
        backDir = dirStack[dirStack.length - 1];
      }
      dispatch(setCurrentDir(backDir.id));
    }
  }

  let breadCrumbsList = dirStack.map((dir, index) => {
    const isLastDir = index + 1 !== dirStack.length;
    return (
      <li key={dir.id} className={styles.item + ' flex alignCenter'}>
        <div className={styles.content + ' flex alignCenter'} onClick={() => сlickHandler(dir.id, isLastDir)}>
          <div className={styles.logo}>{isLastDir ? breadCrumbDir('silver') : breadCrumbDir('blue')}</div>
          <span className={isLastDir ? styles.direct : styles.direct + ' font-color-second'}>
            {index === 0 ? 'Моє сховище' : dir.name}
          </span>
        </div>
        {isLastDir && <span className={styles.arrow + ' flex alignCenter'}>{rightArrow()}</span>}
      </li>
    );
  });

  return (
    <div className={styles.breadCrumbs}>
      <div className={'container'}>
        <ul className={styles.list + ' flex alignCenter'}>{breadCrumbsList}</ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
