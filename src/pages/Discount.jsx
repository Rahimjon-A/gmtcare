import React, { useState } from 'react';
import Footer from '../components/home/Footer';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import Brends from '../components/home/Brends';
import Section4 from '../components/home/Section4';
import Section2 from '../components/home/Section2';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import Card from '../ui/Card';
import { myData } from '../library/myData';
import PaginationComponent from '../ui/Pagination';
import { VscSettings } from 'react-icons/vsc';

const Discount = () => {
  const itemsPerPage = 9;
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Фильтр');

  const renderDuscount = (currentItems) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] ">
      {currentItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );

  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Акции
          </span>
        </Link>
      </div>

      <div className="container">
        <div
          onClick={() => setShow((prev) => !prev)}
          className="flex md:hidden cursor-pointer items-center justify-center gap-2 border rounded-[10px] py-[12px] px-[20px] mt-[20px] mb-[10px] relative "
        >
          <VscSettings className="w-5 h-5 md:hidden " />
          <p>{value} </p>
        </div>

        <div
          className={` ${
            show ? 'flex' : 'hidden'
          } flex-col gap-3 absolute z-10 w-full border border-[--border] rounded-[10px] p-[15px] bg-[#F8F7F3] top-[250px] right-0 `}
        >
          <p
            onClick={() => {
              setValue('Группы товаров');
              setShow(false);
            }}
            className={`custom-links `}
          >
            Группы товаров
          </p>
          <p
            onClick={() => {
              setValue('Мониторы');
              setShow(false);
            }}
            className={` custom-links`}
          >
            Мониторы
          </p>
          <p
            onClick={() => {
              setValue(' Лампы');
              setShow(false);
            }}
            className={`custom-links `}
          >
            Лампы
          </p>
          <p
            onClick={() => {
              setValue(' Кровати');
              setShow(false);
            }}
            className={` custom-links`}
          >
            Кровати
          </p>
          <p
            onClick={() => {
              setValue('Рентгены');
              setShow(false);
            }}
            className={` custom-links`}
          >
            Рентгены
          </p>
        </div>
        
      </div>

      <div className="mt-[20px] container grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-[10px] ">
        <div className="hidden md:block border border-[--border] p-[15px] rounded-[10px] h-max ">
          <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">Категории</p>
          <ul className={`rounded-[5px]  flex flex-col gap-2 w-auto `}>
            <Link>
              <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Группы товаров
                <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
              </li>
            </Link>

            <Link>
              <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Мониторы <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
              </li>
            </Link>

            <Link>
              <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Лампы <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
              </li>
            </Link>

            <Link>
              <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Кровати
                <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
              </li>
            </Link>

            <Link>
              <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Рентгены <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
              </li>
            </Link>
          </ul>
        </div>

        <div className=" custom-margin">
          <PaginationComponent
            items={myData}
            itemsPerPage={itemsPerPage}
            renderItems={renderDuscount}
          />
        </div>
      </div>

      <Section2 />
      <Section4 text="Ранее смотрели" sort={false} />
      <Brends />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Discount;
