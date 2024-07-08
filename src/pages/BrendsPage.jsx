import React from 'react';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';
import CustomizedAccordions from '../components/home/Accordion';
import Brends from '../components/home/Brends';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import KategoriyaItem from '../components/KategoriyaItem';
import Title from '../ui/Title';

const BrendsPage = () => {
  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link to={'/producers'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Производители <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Медецинское оборудование Draeger
          </span>
        </Link>
      </div>

      <div className="container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className=" custom-title mb-[30px] lg:mb-[40px] ">Медецинское оборудование Draeger</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mb-[25px] lg:mb-[40px] ">
          <img src="/public/images/brandsPage1.png" alt="image" />
          <img src="/public/images/brandsPage2.png" alt="image" />
        </div>

        <div className=" flex flex-col gap-[20px] w-[90%] lg:w-1/2 lg:ml-auto">
          <p className=" custom-text ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
          <p className=" custom-text ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
        </div>
      </div>

      <div className=' container mb-[25px] lg:mb-[40px] '>
        <Title text={'Оборудование Draeger'} />
      </div>
        <KategoriyaItem />
      <Brends />
      <CustomizedAccordions />
      <Map />
      <Footer />
    </>
  );
};

export default BrendsPage;
