import React from 'react';

export const close = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M6.854 17.854a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708.708l-11 11z'></path>
      <path d='M17.18 17.888a.5.5 0 1 0 .708-.707L6.854 6.146a.5.5 0 0 0-.708.708l11.035 11.034z'></path>
    </g>
  </svg>
);
