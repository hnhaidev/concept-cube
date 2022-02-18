import { FC } from 'react';
import Content from './Content';
import Title from './Title';

interface Props {
  data: {
    year: string;
    contents: {
      title: {
        ko: string;
        en: string;
      };
      description: {
        ko: string;
        en: string;
      };
    }[];
  }[];
}

const History: FC<Props> = ({ data }) => {
  return (
    <div className="history">
      <div className="history-container">
        <Title />
        <Content data={data} />
      </div>
    </div>
  );
};

export default History;
