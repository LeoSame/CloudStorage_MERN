import React from 'react';
import { dirLogo } from '../../../../assets/img/dirLogo.jsx';
import { fileLogo } from '../../../../assets/img/fileLogo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/disk';
import sizeFormat from '../../../../utils/sizeFormat';
import styles from './File.module.scss';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const fileView = useSelector(state => state.files.view);

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

  if (fileView === 'plate') {
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
  }

  if (fileView === 'list') {
    return (
      <div className={styles.file} onClick={() => openDirHandler(file)}>
        <div className={styles.file__img}>{file.type === 'dir' ? dirLogo(file.isEmpty) : fileLogo()}</div>
        <div>{file.name}</div>
        <div className={styles.date}>{file.date.slice(0, 10)}</div>
        <div className={styles.size}>{sizeFormat(file.size)}</div>
        {file.type !== 'dir' && (
          <button onClick={e => downloadClickHandler(e)} className={styles.file__btn + ' ' + styles.download}>
            download
          </button>
        )}
        <button onClick={e => deleteClickHandler(e)} className={styles.file__btn + ' ' + styles.delete}>
          delete
        </button>
      </div>
    );
  }
};

export default File;
