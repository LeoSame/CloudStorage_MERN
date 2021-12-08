import React from 'react';

export const breadCrumbDir = (colorType = 'blue', width = 15, height = 15) => {
  let fillPrime, filSecond;
  if (colorType === 'blue') {
    fillPrime = '#4aaee8';
    filSecond = '#2980b9';
  } else if (colorType === 'silver') {
    fillPrime = '#afafaf';
    filSecond = '#7a7a7a';
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 56' width={width} height={height}>
      <title>Folder</title>
      <g id='Layer_1' data-name='Layer 1'>
        <rect fill={filSecond} y='6' width='60' height='46' rx='4' ry='4' />
        <path
          fill={filSecond}
          d='M0,10V4A4,4,0,0,1,4,0H18.34a4,4,0,0,1,2.83,1.17l7.66,7.66A4,4,0,0,0,31.66,10H40v8H0Z'
        />
        <rect fill={fillPrime} y='10' width='64' height='46' rx='4' ry='4' />
      </g>
    </svg>
  );
};
