import React from 'react';

export const allFiles = (className, color = '#787e83', width = 18, height = 18) => (
  <svg
    style={{ margin: '6px' }}
    width={width}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 490 490'
  >
    <g>
      <g>
        <polygon fill='#AFB6BB' points='430,100 340,100 340,10    ' />
        <polygon fill='#FFFFFF' points='430,100 430,480 60,480 60,10 340,10 340,100    ' />
      </g>
      <g>
        <path
          fill={color}
          d='M439.976,100c-0.001-2.602-0.993-5.159-2.905-7.071l-90-90c-1.913-1.912-4.47-2.904-7.071-2.905V0     H60c-5.523,0-10,4.477-10,10v470c0,5.523,4.477,10,10,10h370c5.523,0,10-4.477,10-10V100H439.976z M350,34.142L405.858,90H350     V34.142z M70,470V20h260v80c0,5.523,4.477,10,10,10h80v360H70z'
        />
        <rect x='130' y='160' fill={color} width='260' height='20' />
        <rect x='100' y='220' fill={color} width='290' height='20' />
        <rect x='100' y='280' fill={color} width='290' height='20' />
        <rect x='100' y='340' fill={color} width='290' height='20' />
        <rect x='100' y='400' fill={color} width='230' height='20' />
        <rect x='355' y='400' fill={color} width='35' height='20' />
        <rect x='100' y='45' fill={color} width='60' height='20' />
        <rect x='100' y='80' fill={color} width='120' height='20' />
      </g>
    </g>
  </svg>
);
