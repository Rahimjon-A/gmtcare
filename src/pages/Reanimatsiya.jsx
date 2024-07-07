import React, { useState } from 'react';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';
import CustomizedAccordions from '../components/home/Accordion';
import { BtnG } from '../ui/Btn';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ranimtsiya from '../../public/images/ranimatsiya.png';
import KibinetItem from '../components/cobinetItems/KibinetItem';
import KobinetSlider from '../components/cobinetItems/KobinetSlider';

const Reanimatsiya = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--second] md:text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] rotate-180 md:rotate-0 " />
          </span>
        </Link>

        <Link to={'/kobinet'} className="hidden md:block ">
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Кабинет под ключ <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>

        <Link to={'/kobinet'} className="hidden md:block ">
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Реанимация <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>

        <Link className="hidden md:block">
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Палата реанимации и интенсивной терапии
          </span>
        </Link>
      </div>

      <div className="container mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className=" custom-title mb-[30px] lg:mb-[40px] ">
          Комплексное оснащение палаты реанимации и интенсивной терапии
        </p>
        <img src={ranimtsiya} alt="" />
        <div className="w-full md:w-[90%] lg:w-1/2 lg:ml-auto  mt-[20px] lg:mt-[20px] mb-[40px] ">
          <p className="custom-text mb-[15px]">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
          <p className="custom-text text-[--pri] cursor-pointer">
            Скачать каталог "Стандарты оснащения отделений"
          </p>
        </div>
      </div>

      <div className=" container custom-margin ">
        <div className="hidden md:block border border-[--border] rounded-[10px] ">
          <ul className="flex gap-[15px] lg:gap-[25px]  items-center text-[12px] lg:text-[14px] font-semibold px-[25px] text-[--text] border-b ">
            <li
              onClick={() => setTab(0)}
              className={` ${
                tab == 0
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px]  `}
            >
              Стандарты оснащения
            </li>

            <li
              onClick={() => setTab(1)}
              className={` ${
                tab == 1
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Список товаров
            </li>
          </ul>
          <div>
            {tab == 0 ? <KibinetItem /> : null}
            {tab == 1 ? <KobinetSlider /> : null}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] md:hidden">
          <KibinetItem />
          <KobinetSlider />
        </div>
      </div>

      <div className=" container">
        <div className="bg-white rounded-[10px] border-[--border] border p-[20px] lg:p-[40px] custom-margin grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] leading-[120%] xl:w-[70%] lg:w-[85%] ">
            Закажите у нас комплексное оснащение
          </p>

          <div>
            <input type="number" className="w-full border-b pb-[10px] " placeholder="Ваш телефон" />
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
      <Footer />
    </>
  );
};

export default Reanimatsiya;
