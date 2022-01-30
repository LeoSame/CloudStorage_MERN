import React from 'react';

export const rename = (color = '#ffffff', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M6.048 13.86l.693-.72 4.105 3.944-.692.721z'></path>
      <path d='M16.06 5.354l2.586 2.585a1.5 1.5 0 0 1 0 2.122L9.707 19H5v-4.707l8.94-8.94a1.5 1.5 0 0 1 2.12 0zM9.294 18l8.646-8.646a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L6 14.707V18h3.293z'></path>
    </g>
  </svg>
);
