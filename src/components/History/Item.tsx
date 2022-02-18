import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  data: {
    year: string;
    contents: {
      title: {
        en: string;
        ko: string;
      };
      description: {
        en?: string;
        ko?: string;
      };
    }[];
  };
}

const Item: FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className="item">
      <div className="years">
        <p>{data.year}</p>
      </div>
      <div className="item-list">
        {data.contents.map((val, idx) => (
          <div className="item-list-content" key={idx}>
            <h2>{i18n.language === 'en' ? val.title.en : val.title.ko}</h2>
            <p>{i18n.language === 'en' ? val.description.en : val.description.ko}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
