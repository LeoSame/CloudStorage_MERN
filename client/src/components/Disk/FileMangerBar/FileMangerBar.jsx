import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFileView } from '../../../reducers/fileReducer';
import Container from '../../../elements/Container/Container';
import { sortByTop, sortByBottom, plate, list, search } from '../../../assets/img/fileMangerBar';
import FileSearch from '../FileSearch/FileSearch';
import styles from './FileMangerBar.module.scss';
import { favorites } from '../../../assets/img/fileMenu';
import { allFiles } from '../../../assets/img/fileMenu/allFiles';

const FileMangerBar = ({ sort, setSort, sortBy, setSortBy }) => {
  const fileView = useSelector(state => state.files.view);
  const [isSearch, setIsSearch] = useState(false);
  const [isAllFiles, setIsAllFiles] = useState(true);

  const dispatch = useDispatch();

  function loadAllFiles(e) {
    e.stopPropagation();
    setIsAllFiles(true);
  }

  function loadFavorites(e) {
    e.stopPropagation();
    setIsAllFiles(false);
  }

  const activeFilterClassName = styles.filterMenu__item + ' ' + styles.filterActive;

  return (
    <Container>
      <div className={styles.fileManagerBar}>
        <div className={styles.filterMenu__wrapper}>
          <ul className={styles.filterMenu__list}>
            <li className={isAllFiles ? activeFilterClassName : styles.filterMenu__item} onClick={e => loadAllFiles(e)}>
              {allFiles(styles.filterIco)}
              <span>Всі файли</span>
            </li>
            <li
              className={isAllFiles ? styles.filterMenu__item : activeFilterClassName}
              onClick={e => loadFavorites(e)}
            >
              {favorites(styles.filterIco, false)}
              <span>Обране</span>
            </li>
          </ul>
        </div>
        <div className={styles.controlFiles}>
          {isSearch ? (
            <FileSearch setIsSearch={setIsSearch} buttonClass={styles.button} />
          ) : (
            <>
              <select value={sort} onChange={e => setSort(e.target.value)} className={styles.select}>
                <option value='name'>За назвою</option>
                <option value='type'>За типоп</option>
                <option value='date'>За датою</option>
                <option value='size'>За розміром</option>
              </select>
              {sortBy === 1 ? (
                <button className={styles.button} onClick={() => setSortBy(-1)}>
                  {sortByTop()}
                </button>
              ) : (
                <button className={styles.button} onClick={() => setSortBy(1)}>
                  {sortByBottom()}
                </button>
              )}
              {fileView === 'list' ? (
                <button className={styles.button} onClick={() => dispatch(setFileView('plate'))}>
                  {plate()}
                </button>
              ) : (
                <button className={styles.button} onClick={() => dispatch(setFileView('list'))}>
                  {list()}
                </button>
              )}
              <button className={styles.button} onClick={() => setIsSearch(true)}>
                {search()}
              </button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default FileMangerBar;
