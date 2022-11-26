import React from 'react';
import { dirLogo, fileLogo } from '../../../../assets/img/disc';
import { useDispatch } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/disk';
import styles from './FileItemPlate.module.scss';

const FileItemPlate = ({ file }) => {
  const dispatch = useDispatch();

  function openDirHandler(file) {
    if (file.type === 'dir') {
      const currentDir = { id: file._id, name: file.name };
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(currentDir));
    }
  }

  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }

  function deleteClickHandler(e) {
    e.stopPropagation();
    dispatch(deleteFile(file));
  }

  return (
    <div className={styles.filePlate} onClick={() => openDirHandler(file)}>
      <div className={styles.filePlate__img}>{file.type === 'dir' ? dirLogo(file.isEmpty) : fileLogo()}</div>
      <div>{file.name}</div>
      <div className={styles.filePlate__btns}>
        {file.type !== 'dir' && (
          <button onClick={e => downloadClickHandler(e)} className={styles.filePlate__btn + ' ' + styles.download}>
            download
          </button>
        )}
        <button onClick={e => deleteClickHandler(e)} className={styles.filePlate__btn + ' ' + styles.delete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default FileItemPlate;
