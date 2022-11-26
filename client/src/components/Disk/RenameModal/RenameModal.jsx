import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameFiles } from '../../../actions/disk.js';
import styles from './RenameModal.module.scss';

import Modal from '../../../elements/Modal/Modal';
import Input from '../../../elements/Input/Input.jsx';

const RenameModal = ({ modalRenameHandler, renameFile, currentDir }) => {
  const renameObject = currentDir || renameFile;

  const [renameFileName, setRenameFileName] = useState(renameObject.name);
  const dispatch = useDispatch();

  function renameHandler() {
    currentDir
      ? dispatch(renameFiles(renameObject.id, renameFileName, 'dir', true))
      : dispatch(renameFiles(renameObject._id, renameFileName, renameObject.type));
    modalRenameHandler();
  }

  return (
    <Modal
      title='Введіть назву папки'
      modalHandler={modalRenameHandler}
      cancelBtn='Скасувати'
      confirmBtn='Зберегти'
      confirmAction={renameHandler}
      confirmDisabled={renameFileName.length <= 0 || renameFileName === renameObject.name}
    >
      <div className={styles.modalContent}>
        <Input type='text' placeholder='Введіть назву папки...' value={renameFileName} setValue={setRenameFileName} />
      </div>
    </Modal>
  );
};

export default RenameModal;
