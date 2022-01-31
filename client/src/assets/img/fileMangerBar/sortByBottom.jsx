import React from 'react';

export const sortByBottom = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M6 16.5a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-1 0v9z'></path>
      <path d='M2.854 11.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4z'></path>
      <path d='M10.146 11.854a.5.5 0 1 0 .708-.708l-4-4a.5.5 0 0 0-.708.708l4 4zM13.5 8a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8zM13.5 11a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zM13.5 14a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4zM13.5 17a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2z'></path>
    </g>
  </svg>
);
