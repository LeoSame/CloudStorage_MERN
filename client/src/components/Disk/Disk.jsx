import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import FileList from './FileList/FileList';
import { setFileView } from '../../reducers/fileReducer';
import Uploader from './Uploader/Uploader';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Container from '../../elements/Container/Container';
import styles from './Disk.module.scss';
import DirMenu from './DirMenu/DirMenu';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState('date');

  useEffect(() => {
    dispatch(getFiles(currentDir.id, sort));
  }, [currentDir, sort, dispatch]);

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
    files.forEach(file => dispatch(uploadFile(file, currentDir.id)));
    setDragEnter(false);
  }

  return (
    <div className={styles.disk}>
      <BreadCrumbs />
      <DirMenu />
      <Container>
        <div className='flex'>
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
        <Uploader />
      </Container>
    </div>
  );
};

export default Disk;
