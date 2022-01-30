import React from 'react';

export const move = (color = '#ffffff', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      fill={color}
      fillRule='nonzero'
      d='M15 17h-2.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .5.5v.793l2.793-2.793L16 11.707v.793a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-.854.354l-4-4a.5.5 0 0 1 0-.708l4-4A.5.5 0 0 1 9 6.5V8h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-.793L5.207 10.5 8 13.293V12.5a.5.5 0 0 1 .5-.5H15v-1.5a.5.5 0 0 1 .854-.354l4 4a.5.5 0 0 1 0 .708l-4 4A.5.5 0 0 1 15 18.5V17z'
    ></path>
  </svg>
);
