import React from 'react';
import IconProps from "../IconProps";

const Index = (
  props: IconProps
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" {...props} viewBox="0 0 80 80">
      <path fill="#8bb7f0" d="M40 2A38 38 0 1 0 40 78A38 38 0 1 0 40 2Z"></path>
      <path fill="#fff" d="M77.784 44.013c.006-.054.016-.106.021-.159C77.8 43.907 77.79 43.96 77.784 44.013zM2.194 43.84c.007.073.021.144.029.217C2.215 43.985 2.201 43.912 2.194 43.84zM44.907 50.471h9.835l1.544-9.989H44.907v-5.46c0-4.149 1.356-7.83 5.239-7.83h6.238v-8.719C55.287 18.325 52.97 18 48.59 18c-9.146 0-14.507 4.831-14.507 15.835v6.647h-9.402v9.989h9.402V77.4c1.858.279 3.744.47 5.68.47 1.749 0 3.458-.159 5.144-.388V50.471z"></path>
      <g>
        <path fill="#4e7ab5" d="M40,3c20.402,0,37,16.598,37,37S60.402,77,40,77S3,60.402,3,40S19.598,3,40,3 M40,2 C19.013,2,2,19.013,2,40s17.013,38,38,38s38-17.013,38-38S60.987,2,40,2L40,2z"></path>
      </g>
    </svg>
  );
};

export default Index;
