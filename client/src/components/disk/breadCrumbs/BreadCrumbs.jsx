import React from 'react';
import { useSelector } from 'react-redux';
import dirLogo from '../../../assets/img/bread-crumb-dir.svg';
import './breadCrumbs.css';

const BreadCrumbs = () => {
  const dirStack = useSelector(state => state.files.dirStack);
  let breadCrumbsList = dirStack.map((dir, index) => {
    return (
      <li key={dir.id} className='bread-crumbs__item'>
        <img className='bread-crumbs__logo' src={dirLogo} alt='' width='20' height='15' />
        <span className='bread-crumbs__direct'>{index === 0 ? 'Моє сховище' : dir.name}</span>
        {index + 1 !== dirStack.length && <span className='bread-crumbs__arrow'>{'>'}</span>}
      </li>
    );
  });

  return (
    <div className='bread-crumbs'>
      <div className='container'>
        <ul className='bread-crumbs__list'>{breadCrumbsList}</ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
