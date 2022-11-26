import React from 'react';
import { downloadFile } from '../../../../actions/disk';
import { favorites, download, share, copy } from '../../../../assets/img/fileMenu';
import styles from './FileMenu.module.scss';

const FileMenu = ({ file }) => {
  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }

  function defaultFunc(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className={styles.container}>
      <button onClick={e => defaultFunc(e)} className={styles.button}>
        {favorites()}
      </button>
      {file.type !== 'dir' && (
        <button onClick={e => downloadClickHandler(e)} className={styles.button}>
          {download()}
        </button>
      )}
      <button onClick={e => defaultFunc(e)} className={styles.button}>
        {share()}
      </button>
      <button onClick={e => defaultFunc(e)} className={styles.button}>
        {copy()}
      </button>
    </div>
  );
};

export default FileMenu;
