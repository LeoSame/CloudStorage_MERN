import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, searchFiles } from '../../../actions/disk';
import { close } from '../../../assets/img/fileMangerBar/close';
import styles from './FileSearch.module.scss';

const FileSearch = ({ setIsSearch, buttonClass }) => {
  const [searchName, setSearchName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(false);
  const currentDir = useSelector(state => state.files.currentDir);
  const dispatch = useDispatch();

  function searchChangeHandler(value) {
    setSearchName(value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }

    if (value !== '') {
      setSearchTimeout(
        setTimeout(
          value => {
            dispatch(searchFiles(value));
          },
          500,
          value
        )
      );
    } else {
      dispatch(getFiles(currentDir.id));
    }
  }

  function closeSearch() {
    setIsSearch(false);
    searchChangeHandler('');
  }

  return (
    <div className={styles.container}>
      <input
        value={searchName}
        onChange={e => searchChangeHandler(e.target.value)}
        type='text'
        className={`input ${styles.fileSearch}`}
        placeholder='Название файла...'
      />
      <button className={`${styles.button} ${buttonClass}`} onClick={() => closeSearch()}>
        {close()}
      </button>
    </div>
  );
};

export default FileSearch;
