import React from 'react';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import Footer from '../components/home/Footer';
import CustomizedAccordions from '../components/home/Accordion';
import Section3 from '../components/home/Section3';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { kluch } from '../library/content';
import { BtnG } from '../ui/Btn';

const Kobinet = () => {
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
            Кабинеты под ключ
          </span>
        </Link>
      </div>

      <div className=" container mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin ">
        <p className=" custom-title mb-[20px] md:mb-[30px] lg:mb-[40px] ">Кабинеты под ключ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] ">
          {kluch.map((item) => (
            <div key={item.id} className="bg-white rounded-[10px] border border-[--border]  ">
              <img src={item.img} alt="" />
              <div className="p-[15px] lg:p-[20px] ">
                <p className=" custom-text">Реанимация</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section3 />

      <div className=' container'>
      <div className="bg-white rounded-[10px] border-[--border] border p-[20px] lg:p-[40px] custom-margin grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
        <p className="text-[18px] md:text-[20px] lg:text-[30px] leading-[120%] xl:w-[70%] lg:w-[85%] ">
          Закажите у нас комплексное оснащение
        </p>

        <div>
          <input type="number" className='w-full border-b pb-[10px] ' placeholder='Ваш телефон' />
          <div className="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px] items-start lg:items-center ">
            <BtnG title={'Заказать'} />
            <p className="mt-4 text-[12px] font-medium text-[--text] opacity-60">
              Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях{' '}
              <a href="#" className="text-[#088269] underline">
                Политики конфиденциальности
              </a>
            </p>
          </div>
        </div>

      </div>
      </div>
      <CustomizedAccordions />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Kobinet;
