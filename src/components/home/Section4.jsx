import { useState } from 'react';
import Carousel from '../../ui/Carousel';
import { BtnG, BtnWG } from '../../ui/Btn';
import { myData } from '../../library/myData';
import Title from '../../ui/Title';

const Section4 = ({ text = 'Каталог товаров', sort = true }) => {
  const [sortedData, setSortedData] = useState('');

  const sortData = () => {
    if (sortedData == '') {
      return myData;
    } else if (sortedData == 'Хит продаж') {
      const sort = myData.filter((item) => item.status == 'Хит продаж');
      return sort;
    } else if (sortedData == 'Новинка') {
      const sort = myData.filter((item) => item.status == 'Новинка');
      return sort;
    } else if (sortedData == 'Акции') {
      const sort = myData.filter((item) => item.status == '-30%');
      return sort;
    }
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden mb-[60px] md:mb-[120px] lg:mb-[150px] ">
      <div className="mb-[23px] md:mb-[19px] lg:mb-[0px]">
        <div className="mb-[25px] md:mb-[35px] lg:mb-[40px] flex justify-between">
          <Title text={text} />
          <div className="hidden sm:flex lg:hidden  gap-4">
            <BtnWG title={'Бесплатная консультация'} />
            <BtnG title={'Все товары'} />
          </div>
        </div>

        <div className={`${sort ? 'flex' : 'hidden'} lg:flex-col gap-[15px]`}>
          <span
            onClick={() => setSortedData('Хит продаж')}
            className="cursor-pointer hover:text-[--pri] hover:underline text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]"
          >
            Хиты продаж
          </span>
          <span
            onClick={() => setSortedData('Новинка')}
            className="cursor-pointer hover:text-[--pri] hover:underline text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]"
          >
            Новинки
          </span>
          <span
            onClick={() => setSortedData('Акции')}
            className="cursor-pointer hover:text-[--pri] hover:underline text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]"
          >
            Акции
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <Carousel carousel={sortData()} />
      </div>
    </div>
  );
};

export default Section4;
