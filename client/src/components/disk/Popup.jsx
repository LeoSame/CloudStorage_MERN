import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir } from '../../actions/file';
import { setPopupDisplay } from '../../reducers/fileReducer';
import Input from '../../elements/Input/Input';
import styles from './Popup.module.scss';

const Popup = () => {
  const [dirName, setDirName] = useState('');
  const popupDisplay = useSelector(state => state.files.popupDisplay);
  const currentDir = useSelector(state => state.files.currentDir);
  const dispatch = useDispatch();

  function closePopup() {
    dispatch(setPopupDisplay('none'));
  }

  function createHandler() {
    dispatch(createDir(currentDir, dirName));
    setDirName('');
    closePopup();
  }

  return (
    <div className={styles.popup} onClick={() => closePopup()} style={{ display: popupDisplay }}>
      <div className={styles.content} onClick={event => event.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>Создать новую папку</div>
          <button className={styles.close} onClick={() => closePopup()}>
            X
          </button>
        </div>
        <Input type='text' placeholder='Введите название папки...' value={dirName} setValue={setDirName} />
        <button className={styles.create} onClick={() => createHandler()}>
          Создать
        </button>
      </div>
    </div>
  );
};

export default Popup;
