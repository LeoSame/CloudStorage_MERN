import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import FileList from './file.list/FileList';
import Popup from './Popup';
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/fileReducer';
import Uploader from './uploader/Uploader';
import Loader from '../../utils/loader/Loader';
import BreadCrumbs from './breadCrumbs/BreadCrumbs';
import './disk.css';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);
  const isLoader = useSelector(state => state.app.loader);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState('type');

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'));
  }

  function backClickHandler() {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files];
    files.forEach(file => dispatch(uploadFile(file, currentDir)));
  }

  function dragEnterHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(true);
  }

  function dragLeaveHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(false);
  }

  function dropHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];
    files.forEach(file => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  }

  if (isLoader === true) {
    return <Loader />;
  }

  return (
    <div className='disk'>
      <BreadCrumbs />
      <div className='container'>
        <div className='disk__btns'>
          {currentDir && (
            <button className='disk__back' onClick={() => backClickHandler()}>
              Назад
            </button>
          )}
          <button
            className='disk__create'
            onClick={() => {
              showPopupHandler();
            }}
          >
            Створити папку
          </button>
          <div className='disk__upload'>
            <label htmlFor='disk__upload-input' className='disk__upload-label'>
              Завантажити файл
            </label>
            <input
              multiple={true}
              onChange={event => fileUploadHandler(event)}
              type='file'
              id='disk__upload-input'
              className='disk__upload-input'
            />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} className='disk__select'>
            <option value='name'>За назвою</option>
            <option value='type'>За типоп</option>
            <option value='date'>За датою</option>
            <option value='size'>За розміром</option>
          </select>
          <button className='disk__plate' onClick={() => dispatch(setFileView('plate'))} />
          <button className='disk__list' onClick={() => dispatch(setFileView('list'))} />
        </div>
        {!dragEnter ? (
          <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <FileList />
          </div>
        ) : (
          <div
            className='drop-area'
            onDrop={dropHandler}
            onDragEnter={dragEnterHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragEnterHandler}
          >
            Перетащите файлы сюда
          </div>
        )}
        <Popup />
        <Uploader />
      </div>
    </div>
  );
};

export default Disk;
