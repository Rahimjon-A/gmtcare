import React, { useState } from 'react';
import Footer from '../components/home/Footer';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import CustomizedAccordions from '../components/home/Accordion';
import Section4 from '../components/home/Section4';
import Section3 from '../components/home/Section3';
import News from '../components/home/News';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import PaginationComponent from '../ui/Pagination';
import { countries, menuItems, producers } from '../library/content';
import { VscSettings } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { BtnG, BtnWG } from '../ui/Btn';

const Producers = () => {
  const itemsPerPage = 9;
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Направления');
  const [active, setAvtive] = useState(false);
  const handlePlace = () => {
    if (show && active) {
      return { top: '830px' };
    } else if (show) {
      return { top: '540px' };
    } else if (active) {
      return { top: '410px' };
    } else {
      return { top: '120px' };
    }
  };

  const renderDuscount = (currentItems) => (
    <div className="grid grid-cols-2 lg:grid-cols-3  gap-[10px] ">
      {currentItems.map((item) => (
        <Link
          to={'/producers/brends'}
          key={item.id}
          className="border border-[--border]  rounded-[10px] overflow-hidden "
        >
          <div className="bg-white h-[152px] lg:h-[196px] flex justify-center items-center border-b border-[--border]">
            <img src={item.img} alt="image" />
          </div>
          <div className="p-[15px] lg:p-[20px] ">
            <p className="w-[90%] lg:w-[70%] text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%] ">
              {item.title}
            </p>
          </div>
        </Link>
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
            Производители
          </span>
        </Link>
      </div>

      <div className="mt-[20px] container custom-margin grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-between gap-[10px] ">
        <div className=" relative">
          <div
            onClick={() => setShow((prev) => !prev)}
            className={`relative text-center cursor-pointer gap-1 flex justify-center  md:justify-between  border border-[--border] py-[15px] px-[20px] rounded-[10px] `}
          >
            <VscSettings className="w-5 h-5 md:hidden " />
            <p className="text-[#202020] text-[14px] font-medium leading-[118%]"> {value} </p>
            <IoIosArrowDown
              className={`${show ? ' rotate-180' : ' '} w-5 h-5 duration-200 hidden md:block `}
            />

            <div
              className={` ${
                show ? 'flex' : 'hidden'
              } flex-col z-10 gap-3 absolute w-full border border-[--border] rounded-[10px] p-[15px] bg-[#F8F7F3] top-[60px] right-0 `}
            >
              {menuItems.map((val, index) => (
                <Link
                  to={'/kategoriya'}
                  key={index}
                  onClick={() => setValue(val)}
                  className={`text-[12px] flex justify-between items-center hover:text-[--pri] duration-200 hover:underline hover:scale-105 `}
                >
                  {val}
                  <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
                </Link>
              ))}
            </div>
          </div>

          <div
            className={` ${
              show ? ' top-[470px] ' : null
            } hidden md:block absolute z-10 w-full mt-[10px] border border-[--border] py-[15px] px-[20px] rounded-[10px] bg-[#F8F7F3]  `}
          >
            <div
              onClick={() => setAvtive((prev) => !prev)}
              className="flex justify-center  md:justify-between gap-1 cursor-pointer "
            >
              <VscSettings className="w-5 h-5 md:hidden " />
              <p className="text-[#202020] text-[14px] font-medium leading-[118%]"> Страны </p>
              <IoIosArrowDown
                className={`${active ? ' rotate-180' : ' '} w-5 h-5 duration-200 hidden md:block `}
              />
            </div>

            <div className={` ${active ? 'block' : 'hidden'} `}>
              <label className="mt-[15px] mb-[12px] bg-white text-[14px] flex justify-between items-center gap-1 border border-[--border] rounded-full px-[20px] py-[10px]   ">
                <input type="text" className="w-full outline-none" placeholder="Поиск по стране" />
                <FaSearch className="text-[--text] " />
              </label>

              <div className="flex flex-col gap-2 ">
                {countries.map((country) => (
                  <label htmlFor={country.id} className="flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      name={country.id}
                      id={country.id}
                      className=" accent-[--pri] "
                    />
                    {country.title}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div
            style={handlePlace()}
            className={` absolute left-0  gap-[10px] items-center hidden md:flex `}
          >
            <BtnWG title={'Сбросить'} />
            <BtnG title={'Показать'} />
          </div>
        </div>

        <div>
          <PaginationComponent
            items={producers}
            itemsPerPage={itemsPerPage}
            renderItems={renderDuscount}
          />
        </div>
      </div>

      <Section4 />
      <Section3 />
      <News />
      <CustomizedAccordions />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Producers;
