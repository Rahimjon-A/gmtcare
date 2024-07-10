import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BtnG, BtnWG } from '../ui/Btn';
import Slider from 'react-slick';
import Card from './Card';
import { Link } from 'react-router-dom';

const Carousel = ({ carousel }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
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
    <>
      <div className="relative  ">
        <Slider ref={sliderRef} {...settings}>
          {carousel.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      <div className="flex justify-end lg:justify-between items-center mt-[25px] lg:mt-[40px]  ">
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

        <div className="flex sm:hidden lg:flex  gap-4">
          <BtnWG title={'Бесплатная консультация'} />
          <Link to={'/korzinka'}>
            {' '}
            <BtnG title={'Все товары'} />{' '}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carousel;
