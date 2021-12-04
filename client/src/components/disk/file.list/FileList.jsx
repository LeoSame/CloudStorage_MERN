import React from 'react';
import './fileList.css';
import { useSelector } from 'react-redux';
import File from './file/File';

const FileList = () => {
  const files = useSelector(state => state.files.files);
  console.log(files);
  const fileList = files.map(file => <File key={file._id} file={file} />);

  return (
    <div className='filelist'>
      <div className='filelist__header'>
        <div className='filelist__name'>Название</div>
        <div className='filelist__date'>Дата</div>
        <div className='filelist__size'>Размер</div>
      </div>
      {fileList}
    </div>
  );
};

export default FileList;
