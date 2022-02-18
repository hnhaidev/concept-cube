import { FC } from 'react';
import Item from './Item';

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

const ListItem: FC<ServiceProps> = ({ data }) => {
  return (
    <div className="service-list">
      {data.map((val) => (
        <Item key={val.id} item={val} />
      ))}
    </div>
  );
};

export default ListItem;
