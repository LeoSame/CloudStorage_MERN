import React from 'react';
import { useDispatch } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import sizeFormat from '../../../../utils/sizeFormat';
import { dirLogo, fileLogo } from '../../../../assets/img/disc';
import styles from './FileListItem.module.scss';
import FileMenu from '../FileMenu/FileMenu';
import FileDropMenu from '../FileDropMenu/FileDropMenu';

const FileItemList = ({ file }) => {
  const dispatch = useDispatch();

  function openDirHandler(file) {
    if (file.type === 'dir') {
      const currentDir = { id: file._id, name: file.name };
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(currentDir));
    }
  }

  return (
    <div className={styles.fileContainer}>
      <div className={styles.file} onClick={() => openDirHandler(file)}>
        <div className={styles.fileFlex}>
          <div className={styles.fileImg}>{file.type === 'dir' ? dirLogo(file.isEmpty) : fileLogo()}</div>
          <div>{file.name}</div>
        </div>
        <div className={styles.fileFlex}>
          {file.type !== 'dir' && <div className={styles.size}>{sizeFormat(file.size)}</div>}
        </div>
        <div className={styles.fileMenu}>
          <FileMenu file={file} />
          <FileDropMenu file={file} />
        </div>
      </div>
    </div>
  );
};

export default FileItemList;
