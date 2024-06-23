import Image from 'next/image';
import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const PortfolioImage: React.FC<Props> = (props) => {
  return (
    <PhotoProvider>
      <div className='flex justify-center'>
        <PhotoView src={props.src} >
          <Image {...props} className='cursor-pointer' />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
};
