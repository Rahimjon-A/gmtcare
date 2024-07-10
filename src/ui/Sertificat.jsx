import { useRef } from 'react';
import sertificat from '../../public/images/sertificat.png';
import Title from './Title';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';

const images = [sertificat, sertificat, sertificat, sertificat, sertificat, sertificat];

const Sertificat = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
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
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden pb-[60px] md:pb-[120px] lg:pb-[150px] ">
      <div className="mb-[25px] md:mb-[30px] ">
        <Title text={'Сертификаты на продукцию'} />
      </div>

      <div className="overflow-hidden">
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="rounded-[10px] overflow-hidden bg-white p-2  ">
                <img
                  src={image}
                  alt="image"
                  className="h-[184px] md:h-[212px] lg:h-[248px] object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:flex gap-4 items-center mt-[40px] ">
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
      </div>
    </div>
  );
};

export default Sertificat;
