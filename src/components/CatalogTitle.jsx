import React, { useState } from 'react';
import Title from '../ui/Title';
import { IoIosArrowDown } from 'react-icons/io';
import { menuItems } from '../library/content';
import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const CatalogTitle = ({text = "Популярные категории"}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Направления');

  return (

    <div className="flex flex-col container md:flex-row md:justify-between md:items-center pt-[10px] ">
      <div className="lg:hidden">
        <Title text={text} />
      </div>

      <div
        onClick={() => setShow((prev) => !prev)}
        className={`border md:max-w-[280px] w-full   border-[--border] mt-[20px] mb-2 md:mt-0 md:mb-0  px-[15px] py-3 rounded-[10px] relative flex lg:hidden  justify-center md:justify-between items-center  gap-2 cursor-pointer `}
      >
        <VscSettings className="w-5 h-5 md:hidden " />
        <p className="text-[#202020] text-[14px] font-medium leading-[118%]"> {value} </p>
        <IoIosArrowDown
          className={`${show ? ' rotate-180' : ' '} w-5 h-5 duration-200 hidden md:block `}
        />

        <div
          className={` ${
            show ? 'flex' : 'hidden'
          } flex-col gap-3 absolute w-full border border-[--border] rounded-[10px] p-[15px] bg-[#F8F7F3] top-[60px] right-0 `}
        >
          {menuItems.map((val, index) => (
            <Link to={"/kategoriya"}
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
    </div>
  );
};

export default CatalogTitle;
