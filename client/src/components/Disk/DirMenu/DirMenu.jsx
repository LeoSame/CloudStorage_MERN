import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir, uploadFile } from '../../../actions/disk.js';
import { createFolderLogo, dropLogo, uploadFileLogo } from '../../../assets/img/disc';
import Button from '../../../elements/Button/Button.jsx';
import Container from '../../../elements/Container/Container.jsx';
import Input from '../../../elements/Input/Input.jsx';
import Modal from '../../../elements/Modal/Modal.jsx';
import { setModalCreateDirOpen } from '../../../reducers/appReducer.js';
import RenameModal from '../RenameModal/RenameModal.jsx';
import styles from './DirMenu.module.scss';

const DirMenu = () => {
  const currentDir = useSelector(state => state.files.currentDir);
  const modalCreateDirOpen = useSelector(state => state.app.modalCreateDirOpen);
  const [modalRenameOpen, setModalRenameOpen] = useState(false);
  const [createDirName, setCreateDirName] = useState('');
  const dispatch = useDispatch();

  function modalCreateHandler() {
    dispatch(setModalCreateDirOpen(!modalCreateDirOpen));
  }

  function createDirHandler() {
    dispatch(createDir(currentDir.id, createDirName));
    modalCreateHandler();
    setCreateDirName('');
  }

  function modalRenameHandler() {
    setModalRenameOpen(!modalRenameOpen);
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

      {modalRenameOpen && <RenameModal modalRenameHandler={modalRenameHandler} currentDir={currentDir} />}
    </div>
  );
};

export default DirMenu;
