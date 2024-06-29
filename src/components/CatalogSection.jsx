import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { menuItems } from '../library/content';
import { Link } from 'react-router-dom';

const CatalogSection = () => {
  return (
    <div className="container grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] mb-[60px] md:mb-[120px] lg:mb-[150px] ">

      <div className="hidden lg:block border border-[--border] p-[15px] rounded-[10px] h-max ">
        <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">Направления</p>

        <ul className={`rounded-[5px]  flex flex-col gap-2 w-auto `}>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Реанимация
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Хирургия <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Офтальмология <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Лабораторная диагностика{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Акушерство <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Гинекология <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Гистология <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Косметология <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Оториноларингология{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Рентгенология и томография{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Рентгенология и томография{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Стерилизация <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Физиотерапия и реабилитация{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] mb-[7px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Функциональная диагностика{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Новинки <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Распродажи <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
          <Link>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              Кабинеты под ключ{' '}
              <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
            </li>
          </Link>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  gap-[10px] mb-[25px] ">

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden row-[span_2]  ">
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] ">
            <img src="./img3.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden row-[span_2]  ">
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] ">
            <img src="./img3.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src="./img1.png" alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование{' '}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CatalogSection;
