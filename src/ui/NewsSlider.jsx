import { useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BtnG } from '../ui/Btn';
import Slider from 'react-slick';

const NewsSlider = ({data}) => {
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
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
                <div key={item.id} className='border border-[--border]  rounded-[10px] overflow-hidden '> 
                  <div className='bg-white h-[152px] lg:h-[320px] flex justify-center items-center border-b border-[--border]' >
                    <img src={item.img} alt="image" className='w-full h-full ' />
                  </div>
                  <div className='p-[10px] lg:p-[15px] '>
                    <span className='text-[12px] font-normal leading-[normal] text-[--text] pb-1 '>{item.date} </span>
                    <p className='w-[70%] lg:w-[90%] text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%] mb-[10px] lg:mb-[15px] '>{item.title} </p>
                    <p className='text-[12px] lg:text-[14px] font-medium leading-[118%] pb-1 text-[--text] w-[85%] '> {item.content} </p>
                  </div>
                </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center lg:justify-between items-center mt-[25px] lg:mt-[40px]  ">

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
          <BtnG title={'Все новости'} />
        </div>
      </div>
    </>
  );
};

export default NewsSlider;