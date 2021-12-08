import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { breadCrumbDir } from '../../../assets/img/breadCrumbDir.jsx';
import { rightArrow } from '../../../assets/img/rightArrow.jsx';
import { setCurrentDir } from '../../../reducers/fileReducer.js';
import './breadCrumbs.css';

const BreadCrumbs = () => {
  const dirStack = useSelector(state => state.files.dirStack);
  const dispatch = useDispatch();

  function сlickHandler(dirId, isLastDir) {
    if (isLastDir) {
      dirStack.pop();
      let backDir = dirStack[dirStack.length - 1];
      while (dirId !== backDir.id) {
        backDir = dirStack.pop();
        backDir = dirStack[dirStack.length - 1];
      }
      dispatch(setCurrentDir(backDir.id));
    }
  }

  let breadCrumbsList = dirStack.map((dir, index) => {
    const isLastDir = index + 1 !== dirStack.length;
    return (
      <li key={dir.id} className='bread-crumbs__item flexAIcenter'>
        <div className='bread-crumbs__content flexAIcenter' onClick={() => сlickHandler(dir.id, isLastDir)}>
          <div className='bread-crumbs__logo'>{isLastDir ? breadCrumbDir('silver') : breadCrumbDir('blue')}</div>
          <span className={isLastDir ? 'bread-crumbs__direct' : 'bread-crumbs__direct font-color-second'}>
            {index === 0 ? 'Моє сховище' : dir.name}
          </span>
        </div>
        {isLastDir && <span className='bread-crumbs__arrow flexAIcenter'>{rightArrow()}</span>}
      </li>
    );
  });

  return (
    <div className='bread-crumbs'>
      <div className='container'>
        <ul className='bread-crumbs__list flexAIcenter'>{breadCrumbsList}</ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
