import React from 'react';
import Card from '../../ui/Card';
import { myData } from '../../library/myData';
import { BtnG } from '../../ui/Btn';
import Slider from 'react-slick';

const KobinetSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-[25px] py-[25px] bg-white rounded-[10px] ">
      <p className=" md:hidden font-semibold pb-[15px] mb-[20px] text-[12px] border-b ">
        Список товаров
      </p>

      <Slider {...settings}>
        {myData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Slider>
      <div className="hidden md:flex justify-center pt-[20px]  ">
        <BtnG title={'Все товары'} />
      </div>
    </div>
  );
};

export default KobinetSlider;
