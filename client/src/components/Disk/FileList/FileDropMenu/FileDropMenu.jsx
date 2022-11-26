import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dots, deleteFileIco, move, rename } from '../../../../assets/img/fileMenu';
import { deleteFile } from '../../../../actions/disk';
import DropBar from '../../../../elements/DropBar/DropBar';
import RenameModal from '../../RenameModal/RenameModal';
import styles from './FileDropMenu.module.scss';

const FileDropMenu = ({ file }) => {
  const [visibleDropBar, setVisibleDropBar] = useState(false);
  const [modalRenameOpen, setModalRenameOpen] = useState(false);
  const dispatch = useDispatch();

  let fileDate = new Date(file.date);

  function modalRenameHandler(e) {
    setModalRenameOpen(!modalRenameOpen);
    setVisibleDropBar(false);
  }

  function openDropMenu(e) {
    document.onclick();
    e.preventDefault();
    e.stopPropagation();
    setVisibleDropBar(!visibleDropBar);
  }

  function deleteClickHandler(e) {
    e.stopPropagation();
    setVisibleDropBar(false);
    console.log(file);
    dispatch(deleteFile(file));
  }

  return (
    <>
      <div onClick={e => openDropMenu(e)} className={styles.fileDropMenu}>
        <button className={styles.button}>{dots()}</button>
        {visibleDropBar && (
          <DropBar visible={visibleDropBar} width={200} setVisibleDropBar={setVisibleDropBar}>
            <nav>
              <ul className={styles.menu}>
                <li>
                  <span className={styles.menuLink}>
                    {move()}
                    <span className={styles.menuText}>Перемістити</span>
                  </span>
                </li>
                <li>
                  <span className={styles.menuLink} onClick={() => modalRenameHandler()}>
                    {rename()}
                    <span className={styles.menuText}>Перейменувати</span>
                  </span>
                </li>
                <li>
                  <span
                    className={styles.menuLink}
                    onClick={e => {
                      deleteClickHandler(e);
                    }}
                  >
                    {deleteFileIco()}
                    <span className={styles.menuText}>Видалити</span>
                  </span>
                </li>
                <li className={styles.fileInfo}>
                  <div className={styles.dateInfo}>Створено</div>
                  <div className={styles.date}>{fileDate.toLocaleString()}</div>
                </li>
              </ul>
            </nav>
          </DropBar>
        )}
      </div>
      {modalRenameOpen && <RenameModal modalRenameHandler={modalRenameHandler} renameFile={file} />}
    </>
  );
};

export default FileDropMenu;
