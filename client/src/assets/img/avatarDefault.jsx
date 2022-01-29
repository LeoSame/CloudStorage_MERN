import React from 'react';

export const avatarDefault = (color = '#5294E2', width = 40, height = 40) => (
  <svg
    width={width}
    height={height}
    style={{ backgroundColor: color }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
  >
    <circle fill={color} cx='16' cy='16' r='14' />
    <g opacity='0.2' transform='translate(0,1)'>
      <path d='m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z' />
      <path d='m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z' />
    </g>
    <g>
      <path
        fill='#ffffff'
        d='m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z'
      />
      <path
        fill='#ffffff'
        d='m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z'
      />
    </g>
  </svg>
);
