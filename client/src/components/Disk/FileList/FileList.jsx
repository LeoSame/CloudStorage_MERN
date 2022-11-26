import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import styles from './FileList.module.scss';
import Loader from '../../../elements/Loader/Loader';
import FileListItem from './FileListItem/FileListItem';
import FileItemPlate from './FileItemPlate/FileItemPlate';

const FileList = () => {
  const files = useSelector(state => state.files.files);
  const fileView = useSelector(state => state.files.view);
  const isLoader = useSelector(state => state.app.loader);

  if (files.length === 0) {
    return <div className={styles.fileNotFound}>Файли не знайдені</div>;
  }

  if (isLoader === true) {
    return <Loader />;
  }

  if (fileView === 'plate') {
    const fileList = files.map(file => <FileItemPlate key={file._id} file={file} />);
    return <div className={styles.fileplate}>{fileList}</div>;
  }

  // if (fileView === 'list') {
  const fileList = files.map(file => <FileListItem key={file._id} file={file} />);

  return (
    <div className={styles.filelist}>
      <TransitionGroup>{fileList}</TransitionGroup>
    </div>
  );
  // }
};

export default FileList;
