import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteAction, deleteFavoriteAction, downloadFile } from '../../../../actions/disk';
import { favorites, download, share, copy } from '../../../../assets/img/fileMenu';
import styles from './FileMenu.module.scss';

const FileMenu = ({ file }) => {
  const dispatch = useDispatch();

  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }

  function defaultFunc(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function addFavorite(e) {
    e.stopPropagation();
    dispatch(addFavoriteAction(file._id, file.type));
  }

  function deleteFavorite(e) {
    e.stopPropagation();
    dispatch(deleteFavoriteAction(file._id, file.type));
  }

  return (
    <div className={styles.container}>
      {file.isFavorite ? (
        <button onClick={e => deleteFavorite(e)} className={styles.button}>
          {favorites(styles.ico, true)}
        </button>
      ) : (
        <button onClick={e => addFavorite(e)} className={styles.button}>
          {favorites(styles.ico, false)}
        </button>
      )}

      {file.type !== 'dir' && (
        <button onClick={e => downloadClickHandler(e)} className={styles.button}>
          {download(styles.ico)}
        </button>
      )}
      <button onClick={e => defaultFunc(e)} className={styles.button}>
        {share(styles.ico)}
      </button>
      <button onClick={e => defaultFunc(e)} className={styles.button}>
        {copy(styles.ico)}
      </button>
    </div>
  );
};

export default FileMenu;
