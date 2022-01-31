import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFileView } from '../../../reducers/fileReducer';
import Container from '../../../elements/Container/Container';
import { sortByTop } from '../../../assets/img/fileMangerBar/sortByTop';
import { sortByBottom } from '../../../assets/img/fileMangerBar/sortByBottom';
import { plate } from '../../../assets/img/fileMangerBar/plate';
import { list } from '../../../assets/img/fileMangerBar/list';
import { search } from '../../../assets/img/fileMangerBar/search';
import FileSearch from '../FileSearch/FileSearch';
import styles from './FileMangerBar.module.scss';

const FileMangerBar = ({ sort, setSort, sortBy, setSortBy }) => {
  const fileView = useSelector(state => state.files.view);
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();

  return (
    <Container>
      <div className={styles.fileManagerBar}>
        <div></div>
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
