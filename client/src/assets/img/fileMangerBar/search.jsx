import React from 'react';

export const search = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z'></path>
      <path d='M18.854 18.146a.5.5 0 0 1-.708.708l-4.5-4.5c-.195-.196.512-.903.708-.708l4.5 4.5z'></path>
    </g>
  </svg>
);
