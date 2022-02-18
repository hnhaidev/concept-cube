import { FC } from 'react';
import Slider from 'react-slick';
import Item from './Item';

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

const Content: FC<Props> = ({ data }) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="history-content">
      <Slider {...settings}>
        {data.map((val) => (
          <Item key={val.year} data={val} />
        ))}
      </Slider>
    </div>
  );
};

export default Content;
