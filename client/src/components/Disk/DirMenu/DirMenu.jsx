import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../../actions/file.js';
import { createFolderLogo } from '../../../assets/img/createFolderLogo.jsx';
import { dropLogo } from '../../../assets/img/dropLogo.jsx';
import { uploadFileLogo } from '../../../assets/img/uploadFileLogo.jsx';
import Button from '../../../elements/Button/Button.jsx';
import Container from '../../../elements/Container/Container.jsx';
import { setPopupDisplay } from '../../../reducers/fileReducer.js';
import FileSearch from '../FileSearch/FileSearch.jsx';
import styles from './DirMenu.module.scss';

const DirMenu = () => {
  const currentDir = useSelector(state => state.files.currentDir);
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'));
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files];
    files.forEach(file => dispatch(uploadFile(file, currentDir.id)));
  }

  return (
    <div className={styles.placeholder}>
      <Container>
        <div className={styles.dirMenu}>
          <div className={styles.controls}>
            <div className={styles.currentDir}>
              <h2 className={styles.currentTitle}>{currentDir.name}</h2>
            </div>
            {isAuth && <FileSearch />}
          </div>
          <div className={styles.controls}>
            <Button className={styles.btn} variant='outline'>
              {createFolderLogo()}
              <span className={styles.btnText} onClick={() => showPopupHandler()}>
                Створити папку
              </span>
            </Button>
            <div></div>
            <Button className={styles.btnFile}>
              <label htmlFor='disk__upload-input' className={styles.uploadLabel}>
                {uploadFileLogo()}
                <span className={styles.btnText}>Завантажити файл</span>
              </label>
              <input
                multiple={true}
                onChange={event => fileUploadHandler(event)}
                type='file'
                id='disk__upload-input'
                className={styles.uploadInput}
              />
            </Button>
            <Button className={styles.btn} variant='drop' disabled>
              {dropLogo()}
              <span className={styles.btnText}>Сміття</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DirMenu;
