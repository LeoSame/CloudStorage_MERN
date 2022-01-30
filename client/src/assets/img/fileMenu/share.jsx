import React from 'react';

export const share = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M14.828 9.879a.5.5 0 0 0-.707-.707l-4.95 4.95a.5.5 0 1 0 .708.706l4.95-4.95z'></path>
      <path d='M17.657 14.121a.5.5 0 1 1-.707-.707l1.06-1.06a4.5 4.5 0 0 0-6.364-6.364l-1.06 1.06a.5.5 0 1 1-.707-.707l1.06-1.06a5.5 5.5 0 0 1 7.779 7.778l-1.061 1.06zM14.475 17.303a.5.5 0 1 0-.707-.707l-1.06 1.06a4.5 4.5 0 1 1-6.365-6.363l1.06-1.06a.5.5 0 1 0-.706-.708l-1.061 1.06a5.5 5.5 0 0 0 7.778 7.779l1.06-1.06z'></path>
    </g>
  </svg>
);
