import React from 'react';
import { useSelector } from 'react-redux';
import File from './File/File';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './FileList.module.scss';

const FileList = () => {
  const files = useSelector(state => state.files.files);
  const fileView = useSelector(state => state.files.view);

  if (files.length === 0) {
    return <div className={styles.fileNotFound}>Файли не знайдені</div>;
  }

  if (fileView === 'plate') {
    const fileList = files.map(file => <File key={file._id} file={file} />);

    return <div className={styles.fileplate}>{fileList}</div>;
  }

  if (fileView === 'list') {
    const fileList = files.map(file => (
      <CSSTransition key={file._id} timeout={500} classNames={'file'} exit={false}>
        <File file={file} />
      </CSSTransition>
    ));

    return (
      <div className={styles.filelist}>
        <div className={styles.header}>
          <div className={styles.name}>Назва</div>
          <div className={styles.date}>Дата</div>
          <div className={styles.size}>Розмір</div>
        </div>
        <TransitionGroup>{fileList}</TransitionGroup>
      </div>
    );
  }
};

export default FileList;
