import { FC } from 'react';
import Content from './Content';
import TextBackground from './TextBackground';

interface PropsData {
  data: {
    id: number;
    path: string;
  }[];
}

const Console: FC<PropsData> = ({ data }) => {
  return (
    <div className="console">
      <TextBackground />
      <Content dataImg={data} />
    </div>
  );
};

export default Console;
