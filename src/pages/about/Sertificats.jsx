import { useState } from 'react';
import Footer from '../../components/home/Footer';
import Map from '../../components/home/Map';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Section4 from '../../components/home/Section4';
import { CSSTransition } from 'react-transition-group';
import '../../ui/Accordion.css';

const Sertificats = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </Link>
        <Link to={'/about'}>
          <span className="text-[--text] cursor-pointer flex items-center gap-2 ">
            О компании <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer flex items-center gap-2 ">
            Сертификаты
          </span>
        </Link>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[55px]  mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin">
        <p className="custom-title">Сертификаты</p>

        <div className="border-t border-[--border]">

          <div className="border-b border-[--border]">
            <div
              className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
              onClick={() => toggleAccordion(0)}
            >
              <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
                Медицинские инструменты
              </span>
              <span
                className={`${
                  activeIndex === 0 ? 'rotate-45 text-white bg-[--pri]' : 'rotate-0'
                } duration-200 border-[--border] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
              >
                +
              </span>
            </div>
            <CSSTransition
              in={activeIndex === 0}
              timeout={300}
              classNames="accordion"
              unmountOnExit
            >
              <ul className="pb-5 flex flex-col gap-[10px] cursor-pointer ">
                <li className="text-[--pri] text-[12px] ">
                  Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
                </li>
                <li className="text-[--pri] text-[12px] ">
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года
                </li>
                <li className="text-[--pri] text-[12px] ">
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Гигрометры ВИТ Свидетельство об утверждении
                </li>
              </ul>
            </CSSTransition>
          </div>

          <div className="border-b border-[--border]">
            <div
              className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
              onClick={() => toggleAccordion(1)}
            >
              <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              Материалы для гинекологии и урологии
              </span>
              <span
                className={`${
                  activeIndex === 1 ? 'rotate-45 text-white bg-[--pri]' : 'rotate-0'
                } duration-200 border-[--border] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
              >
                +
              </span>
            </div>
            <CSSTransition
              in={activeIndex === 1}
              timeout={300}
              classNames="accordion"
              unmountOnExit
            >
              <ul className="pb-5 flex flex-col gap-[10px] cursor-pointer ">
                <li className="text-[--pri] text-[12px] ">
                  Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
                </li>
                <li className="text-[--pri] text-[12px] ">
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года
                </li>
                <li className="text-[--pri] text-[12px] ">
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Гигрометры ВИТ Свидетельство об утверждении
                </li>
              </ul>
            </CSSTransition>
          </div>

          <div className="border-b border-[--border]">
            <div
              className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
              onClick={() => toggleAccordion(2)}
            >
              <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              Материалы для инъекционных процедур
              </span>
              <span
                className={`${
                  activeIndex === 2 ? 'rotate-45 text-white bg-[--pri]' : 'rotate-0'
                } duration-200 border-[--border] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
              >
                +
              </span>
            </div>
            <CSSTransition
              in={activeIndex === 2}
              timeout={300}
              classNames="accordion"
              unmountOnExit
            >
              <ul className="pb-5 flex flex-col gap-[10px] cursor-pointer ">
                <li className="text-[--pri] text-[12px] ">
                  Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
                </li>
                <li className="text-[--pri] text-[12px] ">
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года
                </li>
                <li className="text-[--pri] text-[12px] ">
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Гигрометры ВИТ Свидетельство об утверждении
                </li>
              </ul>
            </CSSTransition>
          </div>

          <div className="border-b border-[--border]">
            <div
              className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
              onClick={() => toggleAccordion(3)}
            >
              <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              Перевязочные материалы
              </span>
              <span
                className={`${
                  activeIndex === 3 ? 'rotate-45 text-white bg-[--pri]' : 'rotate-0'
                } duration-200 border-[--border] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
              >
                +
              </span>
            </div>
            <CSSTransition
              in={activeIndex === 3}
              timeout={300}
              classNames="accordion"
              unmountOnExit
            >
              <ul className="pb-5 flex flex-col gap-[10px] cursor-pointer ">
                <li className="text-[--pri] text-[12px] ">
                  Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
                </li>
                <li className="text-[--pri] text-[12px] ">
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года
                </li>
                <li className="text-[--pri] text-[12px] ">
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.
                </li>
                <li className="text-[--pri] text-[12px] ">
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.

                </li>
                <li className="text-[--pri] text-[12px] ">
                Гигрометры ВИТ Свидетельство об утверждении
                </li>
              </ul>
            </CSSTransition>
          </div>
        </div>
      </div>

      <Section4 />
      <Map />
      <Footer />
    </>
  );
};

export default Sertificats;
