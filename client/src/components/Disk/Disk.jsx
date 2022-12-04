import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile, getFavorites } from '../../actions/disk';
import FileList from './FileList/FileList';
import Uploader from './Uploader/Uploader';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Container from '../../elements/Container/Container';
import DirMenu from './DirMenu/DirMenu';
import FileMangerBar from './FileMangerBar/FileMangerBar';
import styles from './Disk.module.scss';

const Disk = () => {
  const dispatch = useDispatch();
  // const params = useParams();
  const currentDir = useSelector(state => state.files.currentDir);
  const isAllFiles = useSelector(state => state.files.isAllFiles);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState('date');
  const [sortBy, setSortBy] = useState(1);

  useEffect(() => {
    if (isAllFiles) {
      dispatch(getFiles(currentDir.id, sort, sortBy));
    } else {
      dispatch(getFavorites(sort, sortBy));
    }
  }, [currentDir, sort, sortBy, isAllFiles, dispatch]);

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
      <FileMangerBar sort={sort} setSort={setSort} sortBy={sortBy} setSortBy={setSortBy} />
      <Container>
        {!dragEnter ? (
          <div
            onDragEnter={dragEnterHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragEnterHandler}
            className={styles.filePlaceholder}
          >
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
            Перетягніть файли сюди
          </div>
        )}
        <Uploader />
      </Container>
    </div>
  );
};

export default Disk;
