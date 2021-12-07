import React from 'react';
import './fileList.css';
import { useSelector } from 'react-redux';
import File from './file/File';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FileList = () => {
  const files = useSelector(state => state.files.files);
  const fileView = useSelector(state => state.files.view);

  if (files.length === 0) {
    return <div className='loader file-not-found'>Файлы не найдены</div>;
  }

  if (fileView === 'plate') {
    const fileList = files.map(file => <File key={file._id} file={file} />);

    return <div className='fileplate'>{fileList}</div>;
  }

  if (fileView === 'list') {
    const fileList = files.map(file => (
      <CSSTransition key={file._id} timeout={500} classNames={'file'} exit={false}>
        <File file={file} />
      </CSSTransition>
    ));

    return (
      <div className='filelist'>
        <div className='filelist__header'>
          <div className='filelist__name'>Назва</div>
          <div className='filelist__date'>Дата</div>
          <div className='filelist__size'>Розмір</div>
        </div>
        <TransitionGroup>{fileList}</TransitionGroup>
      </div>
    );
  }
};

export default FileList;
