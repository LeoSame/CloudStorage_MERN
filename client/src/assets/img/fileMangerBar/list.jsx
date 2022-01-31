import React from 'react';

export const list = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h24v24H0z'></path>
      <path
        fill={color}
        fillRule='nonzero'
        d='M8.5 7h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1zm0 5h11a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1zm0 5h11a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1zM4.5 7h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0 5h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm0 5h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1z'
      ></path>
    </g>
  </svg>
);
