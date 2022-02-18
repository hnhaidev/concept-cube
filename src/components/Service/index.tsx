import React, { FC } from 'react';
import ListItem from './ListItem';

interface ServiceProps {
  data: {
    id: any;
    img_off: string;
    img_on: string;
    tit: string;
    subtit: string;
    desc_ko: string;
    desc_en: string;
  }[];
}

const Service: FC<ServiceProps> = ({ data }) => {
  return (
    <div className="service">
      <ListItem data={data} />
    </div>
  );
};

export default Service;
