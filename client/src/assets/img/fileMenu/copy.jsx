import React from 'react';

export const copy = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M14.293 7H8.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7.793L14.293 7zM8.5 6h6.207L19 10.293V18.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 18.5v-11A1.5 1.5 0 0 1 8.5 6z'></path>
      <path d='M14 6.5a.5.5 0 1 1 1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 1 1 0 1h-3A1.5 1.5 0 0 1 14 9.5v-3zM12.5 4a.5.5 0 1 1 0 1h-6a.5.5 0 0 0-.5.5v12a.5.5 0 1 1-1 0v-12A1.5 1.5 0 0 1 6.5 4h6z'></path>
    </g>
  </svg>
);
