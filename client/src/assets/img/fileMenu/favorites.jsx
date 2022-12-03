import React from 'react';

export const favorites = (className, added = false, color = '#787e83', width = 24, height = 24) => {
  let addedPath = null;
  if (added) {
    addedPath = (
      <>
        <circle cx='16.5' cy='16.5' r='4.5' fill='#42A5F5'></circle>
        <path
          fill='#FFF'
          d='M17.467 15.386a.5.5 0 0 1 .707.707l-1.889 1.889a.5.5 0 0 1-.707 0l-.932-.932a.5.5 0 0 1 .708-.707l.578.578 1.535-1.535z'
        ></path>
      </>
    );
  }

  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        className={className}
        fill={color}
        d='M11.91 16.176l3.73 1.96a.5.5 0 0 0 .725-.527l-.712-4.152 3.017-2.941a.5.5 0 0 0-.277-.853l-4.17-.606L12.36 5.28a.5.5 0 0 0-.897 0L9.598 9.057l-4.17.606a.5.5 0 0 0-.277.853l3.017 2.94-.712 4.153a.5.5 0 0 0 .725.527l3.73-1.96zm-3.263 2.846A1.5 1.5 0 0 1 6.47 17.44l.624-3.634-2.641-2.574a1.5 1.5 0 0 1 .831-2.559l3.65-.53 1.631-3.307a1.5 1.5 0 0 1 2.69 0l1.633 3.307 3.649.53a1.5 1.5 0 0 1 .831 2.559l-2.64 2.574.623 3.634a1.5 1.5 0 0 1-2.177 1.582l-3.263-1.716-3.264 1.716z'
      ></path>
      {addedPath}
    </svg>
  );
};
