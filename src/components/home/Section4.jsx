import React from 'react';
import Carousel from '../../ui/Carousel';
import { BtnG, BtnWG } from '../../ui/Btn';
import { carousel } from '../../library/content';
import Title from '../../ui/Title';

const Section4 = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden mb-[60px] md:mb-[120px] lg:mb-[150px] ">
     
      <div className="mb-[23px] md:mb-[19px] lg:mb-[0px]">
       
        <div className="mb-[25px] md:mb-[35px] lg:mb-[40px] flex justify-between">
          <Title text={'Каталог товаров'} />
          <div className="hidden sm:flex lg:hidden  gap-4">
            <BtnWG title={'Бесплатная консультация'} />
            <BtnG title={'Все товары'} />
          </div>
        </div>
        
        <div className="flex lg:flex-col gap-[15px]">
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Хиты продаж
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Новинки
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Акции
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <Carousel carousel={carousel} />
      </div>
    </div>
  );
};

export default Section4;
