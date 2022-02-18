import { FC } from 'react';
import Slider from 'react-slick';

interface PropsData {
  dataImg: {
    id: number;
    path: string;
  }[];
}

const Content: FC<PropsData> = ({ dataImg }) => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="console-content">
      <Slider {...setting}>
        {dataImg.map((val) => (
          <div key={val.id} className="item-slide">
            <img src={val.path} alt="console-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Content;
