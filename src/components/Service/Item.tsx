import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  id: any;
  img_off: string;
  img_on: string;
  tit: string;
  subtit: string;
  desc_ko: string;
  desc_en: string;
}

interface ItemProps {
  item: Props;
}

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

const Item: FC<ItemProps> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const viewPort = useViewport();
  const { i18n } = useTranslation();

  const renderDesc = () => {
    return i18n.language === 'en' ? item.desc_en : item.desc_ko;
  };

  return (
    <div
      className={`item ${isHover && 'hover'}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <h6 className="item-tit">{viewPort.width <= 768 ? item.subtit : item.tit}</h6>
      <img className="item-img" src={isHover ? item.img_on : item.img_off} alt="img" />
      <p className="item-desc">
        <p className="subtit">{item.subtit}</p>
        {renderDesc()}
      </p>
    </div>
  );
};

export default Item;
