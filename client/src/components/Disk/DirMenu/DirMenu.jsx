import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir, renameFiles, uploadFile } from '../../../actions/disk.js';
import { createFolderLogo } from '../../../assets/img/createFolderLogo.jsx';
import { dropLogo } from '../../../assets/img/dropLogo.jsx';
import { uploadFileLogo } from '../../../assets/img/uploadFileLogo.jsx';
import Button from '../../../elements/Button/Button.jsx';
import Container from '../../../elements/Container/Container.jsx';
import Input from '../../../elements/Input/Input.jsx';
import Modal from '../../../elements/Modal/Modal.jsx';
import { setModalCreateDirOpen, setModalRenameOpen } from '../../../reducers/appReducer.js';
import FileSearch from '../FileSearch/FileSearch.jsx';
import styles from './DirMenu.module.scss';

const DirMenu = () => {
  const currentDir = useSelector(state => state.files.currentDir);
  const modalCreateDirOpen = useSelector(state => state.app.modalCreateDirOpen);
  const modalRenameOpen = useSelector(state => state.app.modalRenameOpen);
  const [createDirName, setCreateDirName] = useState('');
  const [renameDirName, setRenameDirName] = useState(currentDir.name);
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    setRenameDirName(currentDir.name);
  }, [currentDir, modalRenameOpen]);

  function modalCreateHandler() {
    dispatch(setModalCreateDirOpen(!modalCreateDirOpen));
  }

  function createDirHandler() {
    dispatch(createDir(currentDir.id, createDirName));
    modalCreateHandler();
    setCreateDirName('');
  }

  function modalRenameHandler() {
    dispatch(setModalRenameOpen(!modalRenameOpen));
  }

  function renameHandler() {
    dispatch(renameFiles(currentDir.id, renameDirName, 'dir'));
    modalRenameHandler();
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
            <div>
              <h2 className={styles.currentTitle}>
                {currentDir.id === 'root' ? (
                  <span>{currentDir.name}</span>
                ) : (
                  <span onClick={() => modalRenameHandler()} className={styles.titleRename}>
                    {currentDir.name}
                  </span>
                )}
              </h2>
            </div>
            {isAuth && <FileSearch />}
          </div>
          <div className={styles.controls}>
            <Button className={styles.btn} variant='outline' onClick={() => modalCreateHandler()}>
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

      {modalCreateDirOpen && (
        <Modal
          title='Створити нову папку'
          modalHandler={modalCreateHandler}
          cancelBtn='Скасувати'
          confirmBtn='Створити'
          confirmAction={createDirHandler}
          confirmDisabled={createDirName.length <= 0}
        >
          <div className={styles.modalContent}>
            <Input type='text' placeholder='Введіть назву папки...' value={createDirName} setValue={setCreateDirName} />
          </div>
        </Modal>
      )}

      {modalRenameOpen && (
        <Modal
          title='Введіть назву папки'
          modalHandler={modalRenameHandler}
          cancelBtn='Скасувати'
          confirmBtn='Зберегти'
          confirmAction={renameHandler}
          confirmDisabled={renameDirName.length <= 0 || renameDirName === currentDir.name}
        >
          <div className={styles.modalContent}>
            <Input type='text' placeholder='Введіть назву папки...' value={renameDirName} setValue={setRenameDirName} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DirMenu;
