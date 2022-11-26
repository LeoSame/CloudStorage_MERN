import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renameFiles } from '../../../actions/disk.js';
import styles from './RenameModal.module.scss';

import Modal from '../../../elements/Modal/Modal';
import Input from '../../../elements/Input/Input.jsx';

const RenameModal = ({ modalRenameHandler }) => {
  const currentDir = useSelector(state => state.files.currentDir);
  const [renameDirName, setRenameDirName] = useState(currentDir.name);
  const dispatch = useDispatch();

  function renameHandler() {
    dispatch(renameFiles(currentDir.id, renameDirName, 'dir'));
    modalRenameHandler();
  }

  return (
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
  );
};

export default RenameModal;
