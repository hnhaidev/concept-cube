import React from 'react';

interface CardProps {
  item: any;
  setIdItem: any;
  setOpenPopup: any;
}

const Card: React.FC<CardProps> = ({ item, setIdItem, setOpenPopup }) => {
  const { img, desc, partners, id } = item;

  console.log(item);

  const handleSetId = (id: any) => {
    setIdItem(id);
    setOpenPopup(true);
  };

  return (
    <div className="card-pd" onClick={() => handleSetId(id)}>
      <div className="card">
        <div className="contents-hide">
          <div className="inner-flex">
            <div>
              <p className="desc">{desc}</p>
            </div>
            <div>
              <p className="partners">{partners}</p>
            </div>
          </div>
        </div>
        <div className="contents-img" style={{ backgroundImage: `url(${img})` }} />
      </div>
    </div>
  );
};

export default Card;
