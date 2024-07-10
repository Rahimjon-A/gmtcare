import React from 'react';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';
import Sertificat from '../ui/Sertificat';
import Title from '../ui/Title';
import { BtnG } from '../ui/Btn';
import { RiDownloadLine } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { services } from '../library/content';
import ServicesCard from '../components/ServicesCard';

const Services = () => {
  return (
    <>
      <div className=" container flex pt-[20px] gap-2 ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Услуги
          </span>
        </Link>
      </div>

      <div className=" container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className="mb-[30px] lg:mb-[40px]  text-[28px] md:text-[34px] lg:text-[48px] ">Услуги</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] ">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className=" container custom-margin grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <Title text={'Цифры и факты'} />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[50%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
            Мы работаем на результат и продаём только качественную продукцию
          </p>
        </div>

        <div className="flex flex-col gap-[20px] ">
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              7 лет
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">на рынке</p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              964+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              оригинальной продукции со всего мира
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              23+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              международных сертификатов качества
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              2452+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              товаров всегда в наличии
            </p>
          </div>
        </div>
      </div>

      <div className=" container custom-margin grid grid-cols-1 md:grid-cols-2  ">
        <div className=" order-1">
          <p className="text-[--second] font-medium leading-[120%] text-[18px] md:text-[20px] xl:text-[30px] pb-[25px] md:pb-[30px] lg:pb-0  ">
            Вы сможете <span className="text-[--pri] ">оставить заявку</span> на услуги и скачать
            бланк для заполнения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-[10px] gap-[10px] col-span-2 lg:col-span-1 order-2 lg:order-1  ">
          <label
            htmlFor="file1"
            className="cursor-pointer flex justify-between items-center  border border-[--border] rounded-[10px] p-[22px]  bg-white "
          >
            <p className="text-[16px] lg:text-[18px] font-semibold ">Бланк для заполнения</p>
            <p className=" custom-text text-[--text] font-medium border border-[--border] rounded-[5px] p-[5px] ">
              <RiDownloadLine className=" w-[20px] h-[20px] " />
            </p>
            <input type="file" name="" id="file1" className=" hidden" />
          </label>

          <label
            htmlFor="file2"
            className="cursor-pointer flex justify-between items-center  border border-[--border] rounded-[10px] p-[22px]  bg-white "
          >
            <p className="text-[16px] lg:text-[18px] font-semibold ">Заполненная форма</p>
            <p className=" custom-text text-[--text] font-medium border border-[--border] rounded-[5px] p-[5px] ">
              <RiDownloadLine className=" w-[20px] h-[20px] " />
            </p>
            <input type="file" name="" id="file2" className=" hidden" />
          </label>
        </div>

        <div className=" order-3 md:order-1 flex items-center justify-center md:justify-end  lg:col-span-2  lg:mt-[25px] ">
          <BtnG title={'Оставить заявку'} />
        </div>
      </div>

      <Sertificat />
      <Map />
      <Footer />
    </>
  );
};

export default Services;
