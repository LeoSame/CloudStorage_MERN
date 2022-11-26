import React from 'react';

export const rightArrow = (color = '000000', strokeWidth = 20, width = 13, height = 13) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    id='Layer_1'
    version='1.1'
    viewBox='0 0 128 128'
    width={width}
  >
    <g>
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        strokeMiterlimit='10'
        x1='40.5'
        x2='87.5'
        y1='17'
        y2='64'
      />
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        strokeMiterlimit='10'
        x1='87.5'
        x2='40.5'
        y1='64'
        y2='111'
      />
    </g>
  </svg>
);
