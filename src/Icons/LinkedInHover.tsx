import React from 'react';
import IconProps from "../IconProps";

const Index = (
  props: IconProps
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" {...props} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18.5" fill="#98ccfd" stroke="#4788c7" strokeMiterlimit="10"></circle>
      <path fill="#fff"
            d="M10.5,14.5h4v15h-4V14.5z M12.488,12.5h-0.022c-1.194,0-1.966-0.89-1.966-2.001	c0-1.135,0.796-1.999,2.011-1.999c1.217,0,1.966,0.864,1.989,1.999C14.5,11.61,13.728,12.5,12.488,12.5z M31.5,20	c0-3.038-2.462-5.5-5.5-5.5c-1.862,0-3.505,0.928-4.5,2.344V14.5h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4	C31.5,29.5,31.5,20.421,31.5,20z"></path>
    </svg>
  );
};

export default Index;
