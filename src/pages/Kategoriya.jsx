import React from 'react';
import Footer from '../components/home/Footer';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import News from '../components/home/News';
import Brends from '../components/home/Brends';
import Section4 from '../components/home/Section4';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import KategoriyaItem from '../components/KategoriyaItem';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Kategoriya = () => {
  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link to={'/catalog'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
          Каталог <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Все категории
          </span>
        </Link>
      </div>
      <KategoriyaItem />
      <Section2 />
      <Section3 />
      <Section4 />
      <Brends />
      <News />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Kategoriya;
