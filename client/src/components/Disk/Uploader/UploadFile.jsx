import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUploadFile } from '../../../reducers/uploadReducer';
import styles from './UploadFile.module.scss';

const UploadFile = ({ file }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.uploadFile}>
      <div className={styles.header}>
        <div className={styles.name}>{file.name}</div>
        <button className={styles.remove} onClick={() => dispatch(removeUploadFile(file.id))}>
          X
        </button>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.uploadBar} style={{ width: file.progress + '%' }} />
        <div className={styles.percent}>{file.progress}%</div>
      </div>
    </div>
  );
};

export default UploadFile;
