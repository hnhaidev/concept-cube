import React from 'react';
import Card from './Card';

interface ListProps {
  data: any[];
  setIdItem: any;
  setOpenPopup: any;
}

const List: React.FC<ListProps> = ({ data, setIdItem, setOpenPopup }) => {
  const renderCards = (data: any[]) => {
    return data.map((val, key) => (
      <Card setIdItem={setIdItem} setOpenPopup={setOpenPopup} item={val} key={key} />
    ));
  };
  return (
    <div className={'card-wr'}>
      <div className="scroll">{renderCards(data)}</div>
    </div>
  );
};

export default List;
