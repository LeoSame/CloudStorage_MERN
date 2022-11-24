import React from 'react';

export const telegram = (className, background = '#53545A', color = '#ffffff', width = 32, height = 32) => (
  <svg className={className} width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <path
      d='M2.08735 2.22166C-0.420092 4.82565 0.0930964 7.5918 0.0930964 15.9953C0.0930964 22.9738 -1.12473 29.9696 5.24891 31.6165C7.23917 32.1283 24.8737 32.1283 26.8613 31.6139C29.515 30.9293 31.6741 28.7773 31.9693 25.0248C32.0105 24.5011 32.0105 7.49875 31.9679 6.9644C31.6542 2.96737 29.1932 0.663792 25.9506 0.197228C25.2074 0.0895596 25.0585 0.0576578 21.2455 0.0510116C7.72045 0.0576578 4.75566 -0.544489 2.08735 2.22166Z'
      fill={background}
    ></path>
    <path
      d='M7.57302 14.5656L22.5322 8.79789C23.2265 8.54706 23.8329 8.96726 23.6079 10.0171L23.6092 10.0158L21.0621 22.0155C20.8734 22.8663 20.3678 23.0731 19.6606 22.6723L15.7818 19.8136L13.911 21.616C13.7041 21.8229 13.5295 21.9974 13.1287 21.9974L13.4041 18.0501L20.5928 11.5557C20.9057 11.2803 20.523 11.1252 20.1106 11.3993L11.2268 16.9925L7.39718 15.7978C6.56583 15.534 6.54773 14.9665 7.57302 14.5656Z'
      fill={color}
    ></path>
  </svg>
);
