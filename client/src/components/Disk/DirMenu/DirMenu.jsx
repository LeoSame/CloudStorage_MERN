import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir, uploadFile } from '../../../actions/file.js';
import { createFolderLogo } from '../../../assets/img/createFolderLogo.jsx';
import { dropLogo } from '../../../assets/img/dropLogo.jsx';
import { uploadFileLogo } from '../../../assets/img/uploadFileLogo.jsx';
import Button from '../../../elements/Button/Button.jsx';
import Container from '../../../elements/Container/Container.jsx';
import Input from '../../../elements/Input/Input.jsx';
import Modal from '../../../elements/Modal/Modal.jsx';
import { setModalDisplay } from '../../../reducers/appReducer.js';
import FileSearch from '../FileSearch/FileSearch.jsx';
import styles from './DirMenu.module.scss';

const DirMenu = () => {
  const currentDir = useSelector(state => state.files.currentDir);
  const [dirName, setDirName] = useState('');
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  function createHandler() {
    dispatch(createDir(currentDir.id, dirName));
    dispatch(setModalDisplay('none'));
    setDirName('');
  }
  function showPopupHandler() {
    dispatch(setModalDisplay('flex'));
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
            <Button className={styles.btn} variant='outline' onClick={() => showPopupHandler()}>
              {createFolderLogo()}
              <span className={styles.btnText}>Створити папку</span>
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
      <Modal
        title='Створити нову папку'
        cancelBtn='Скасувати'
        confirmBtn='Створити'
        confirmAction={createHandler}
        confirmDisabled={dirName.length <= 0}
      >
        <div className={styles.modalContent}>
          <Input type='text' placeholder='Введите название папки...' value={dirName} setValue={setDirName} />
        </div>
      </Modal>
    </div>
  );
};

export default DirMenu;
