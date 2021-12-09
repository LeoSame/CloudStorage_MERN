import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideUploader } from '../../../reducers/uploadReducer';
import UploadFile from './UploadFile';
import styles from './Uploader.module.scss';

const Uploader = () => {
  const files = useSelector(state => state.upload.files);
  const isVisible = useSelector(state => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <div className={styles.uploader}>
        <div className={styles.header}>
          <div className={styles.title}>Загрузки</div>
          <button className={styles.close} onClick={() => dispatch(hideUploader())}>
            X
          </button>
        </div>
        {files.map(file => (
          <UploadFile key={file.id} file={file} />
        ))}
      </div>
    )
  );
};

export default Uploader;
