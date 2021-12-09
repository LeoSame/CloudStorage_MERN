import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import FileList from './FileList/FileList';
import Popup from './Popup';
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/fileReducer';
import Uploader from './Uploader/Uploader';
import Loader from '../../elements/Loader/Loader';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import styles from './Disk.module.scss';
import Container from '../../elements/Container/Container';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);
  const isLoader = useSelector(state => state.app.loader);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState('date');

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'));
  }

  function backClickHandler() {
    dirStack.pop();
    const backDir = dirStack[dirStack.length - 1];
    dispatch(setCurrentDir(backDir.id));
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
    <div className={styles.disk}>
      <BreadCrumbs />
      <Container>
        <div className={styles.btns}>
          {currentDir && currentDir !== 'root' && (
            <button className={styles.back} onClick={() => backClickHandler()}>
              Назад
            </button>
          )}
          <button
            className={styles.create}
            onClick={() => {
              showPopupHandler();
            }}
          >
            Створити папку
          </button>
          <div className={styles.upload}>
            <label htmlFor='disk__upload-input' className={styles.uploadLabel}>
              Завантажити файл
            </label>
            <input
              multiple={true}
              onChange={event => fileUploadHandler(event)}
              type='file'
              id='disk__upload-input'
              className={styles.uploadInput}
            />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} className={styles.select}>
            <option value='name'>За назвою</option>
            <option value='type'>За типоп</option>
            <option value='date'>За датою</option>
            <option value='size'>За розміром</option>
          </select>
          <button className={styles.plate} onClick={() => dispatch(setFileView('plate'))} />
          <button className={styles.list} onClick={() => dispatch(setFileView('list'))} />
        </div>
        {!dragEnter ? (
          <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <FileList />
          </div>
        ) : (
          <div
            className={styles.dropArea}
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
      </Container>
    </div>
  );
};

export default Disk;
