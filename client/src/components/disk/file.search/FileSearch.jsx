import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, searchFiles } from '../../../actions/file';
import './fileSearch.css';

const FileSearch = () => {
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
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <input
      value={searchName}
      onChange={e => searchChangeHandler(e.target.value)}
      type='text'
      className='file-search'
      placeholder='Название файла...'
    />
  );
};

export default FileSearch;
