import React from 'react';
import { BtnG } from '../../ui/Btn';
import Title from '../../ui/Title';

const Section1 = () => {
  return (
    <div className="container mb-[84px] lg:mb-[125px] ">
      <div className="flex justify-between items-center mb-[45px] ">
        <Title text={'Популярные категории'} />
        <div className="hidden md:block ">
          <BtnG title={'Все категории'} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] mb-[25px] ">
        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img1.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden row-[span_2]  ">
          <div className="p-[20px] bg-white h-[272px] sm:h-[378px] lg:h-[534px] ">
            <img src="./images/img3.png" alt="" className="w-full h-full " />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img2.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img1.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img1.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img1.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./images/img1.png" alt="" className="w-full h-full " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex md:hidden justify-center">
        <BtnG title={'Все категории'} />
      </div>
    </div>
  );
};

export default Section1;
