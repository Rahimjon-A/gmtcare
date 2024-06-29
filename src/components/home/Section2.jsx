import React, { useRef } from 'react';
import Title from '../../ui/Title';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BtnG, BtnWG } from '../../ui/Btn';
import { kibinet } from '../../library/content';



const Section2 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mb-[82px] md:mb-[120px] lg:mb-[150px]  ">
      <div className=" mb-[25px] lg:mb-[43px]">
        <Title text={'Комплексное оснащение кабинетов'} />
      </div>

      <div className="overflow-hidden ">
        <Slider ref={sliderRef} {...settings}>
          {kibinet.map((item) => (
            <div key={item.id} className="border max-w-[420px]  border-[--border] rounded-[10px]">
              <div className="lg:h-[517px]">
                <img src={item.img} alt={item.title} className="w-full h-full" />
              </div>
              <div className=" py-[15px] px-[15px]  lg:px-[25px] lg:py-[20px]">
                <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[140%]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center sm:justify-end lg:justify-between items-center mt-[40px]  ">
        <div className="hidden lg:flex gap-4 items-center ">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#F8F7F3] hover:border-[--pri] duration-200 focus:bg-[#e1efe6] focus:border-[--pri] transition-all rounded-full border border-[--border] p-3"
          >
            <FaArrowLeft className="w-[17px] h-[17px]" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#F8F7F3] hover:border-[--pri] duration-200 focus:bg-[#e1efe6] focus:border-[--pri] transition-all rounded-full border border-[--border] p-3"
          >
            <FaArrowRight className="w-[17px] h-[17px]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center  gap-4">
          <BtnWG title={'Бесплатная консультация'} />
          <BtnG title={'Рассчитать стоимость'} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
