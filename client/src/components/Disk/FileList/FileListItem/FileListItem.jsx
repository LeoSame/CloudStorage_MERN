import React, { useState } from 'react';
import { dirLogo } from '../../../../assets/img/dirLogo.jsx';
import { fileLogo } from '../../../../assets/img/fileLogo.jsx';
import { useDispatch } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/disk';
import sizeFormat from '../../../../utils/sizeFormat';
import DropBar from '../../../../elements/DropBar/DropBar.jsx';
import { favorites, download, share, copy, dots, deleteFileIco, move, rename } from '../../../../assets/img/fileMenu';
import styles from './FileListItem.module.scss';

const FileItemList = ({ file }) => {
  const dispatch = useDispatch();
  const [visibleDropBar, setVisibleDropBar] = useState(false);
  let fileDate = new Date(file.date);

  function openDirHandler(file) {
    if (file.type === 'dir') {
      const currentDir = { id: file._id, name: file.name };
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(currentDir));
    }
  }

  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }

  function deleteClickHandler(e) {
    e.stopPropagation();
    setVisibleDropBar(false);
    console.log(file);
    dispatch(deleteFile(file));
  }

  function openDropMenu(e) {
    document.onclick();
    e.preventDefault();
    e.stopPropagation();
    setVisibleDropBar(!visibleDropBar);
  }

  function defaultFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    setVisibleDropBar(false);
  }

  return (
    <div className={styles.fileContainer}>
      <div className={styles.file} onClick={() => openDirHandler(file)}>
        <div className={styles.fileFlex}>
          <div className={styles.fileImg}>{file.type === 'dir' ? dirLogo(file.isEmpty) : fileLogo()}</div>
          <div>{file.name}</div>
        </div>
        <div className={styles.fileFlex}>
          {file.type !== 'dir' && <div className={styles.size}>{sizeFormat(file.size)}</div>}
        </div>
        <div className={styles.fileMenu}>
          <button onClick={e => defaultFunc(e)} className={styles.button}>
            {favorites()}
          </button>
          {file.type !== 'dir' && (
            <button onClick={e => downloadClickHandler(e)} className={styles.button}>
              {download()}
            </button>
          )}
          <button onClick={e => defaultFunc(e)} className={styles.button}>
            {share()}
          </button>
          <button onClick={e => defaultFunc(e)} className={styles.button}>
            {copy()}
          </button>
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
                      <span className={styles.menuLink}>
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
        </div>
      </div>
    </div>
  );
};

export default FileItemList;
