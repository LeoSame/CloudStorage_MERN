import React from 'react';

export const dots = (color = '#787e83', width = 12, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 24'>
    <g fill={color} fillRule='evenodd'>
      <circle cx='6.5' cy='7.5' r='1.5'></circle>
      <circle cx='6.5' cy='12.5' r='1.5'></circle>
      <circle cx='6.5' cy='17.5' r='1.5'></circle>
    </g>
  </svg>
);
