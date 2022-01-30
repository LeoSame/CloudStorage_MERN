import React from 'react';

export const settings = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
    <g>
      <path
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.35,9.52a7.78,7.78,0,0,0,0-3l-1.59-.26a5.56,5.56,0,0,0-.43-1l.94-1.29a7.66,7.66,0,0,0-2.16-2.16l-1.29.94a5.56,5.56,0,0,0-1-.43L9.52.65a7.78,7.78,0,0,0-3,0L6.22,2.24a5.56,5.56,0,0,0-1,.43L3.89,1.73A7.66,7.66,0,0,0,1.73,3.89l.94,1.29a5.56,5.56,0,0,0-.43,1L.65,6.48a7.78,7.78,0,0,0,0,3l1.59.26a5.56,5.56,0,0,0,.43,1l-.94,1.29a7.66,7.66,0,0,0,2.16,2.16l1.29-.94a5.56,5.56,0,0,0,1,.43l.26,1.59a7.78,7.78,0,0,0,3,0l.26-1.59a5.56,5.56,0,0,0,1-.43l1.29.94a7.66,7.66,0,0,0,2.16-2.16l-.94-1.29a5.56,5.56,0,0,0,.43-1Z'
      ></path>
      <circle stroke={color} fill='none' strokeLinecap='round' strokeLinejoin='round' cx='8' cy='8' r='2.5'></circle>
    </g>
  </svg>
);
