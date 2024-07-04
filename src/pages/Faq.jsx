import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Accordion from '../ui/ExtraAccordion';
import { faq } from '../library/content';
import PaginationComponent from '../ui/Pagination';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';

const Faq = () => {

  
  const itemsPerPage = 10;

  const renderAccodion = (currentItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] ">
      {currentItems.map((title, index) => (
        <Accordion key={index} title={title} show={false} />
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
            FAQ
          </span>
        </Link>
      </div>

      <div className=" container grid grid-cols-1 lg:grid-cols-2 mt-[40px] md:mt-[50px] lg:mt-[100px] gap-[30px] md:gap-[40px] lg:gap-[120px] custom-margin ">
        <div className="flex flex-col gap-[41px] ">
          <p className=" custom-title leading-[110%] ">Часто задаваемые вопросы</p>

          <div className="flex w-full bg-[#d5d1e1] border rounded-full overflow-hidden ">
            <input
              type="text"
              id="main"
              className="bg-[#f8f7f3] flex-1 outline-none py-[10px] px-[20px] text-[14px] rounded-full "
              placeholder="Поиск"
            />
            <label htmlFor="main" className="bg-[#d5d1e1] px-2 md:px-4 flex items-center ">
              <IoIosSearch className=" text-[--text]  text-[18px] "></IoIosSearch>
            </label>
          </div>
        </div>

        <div className='border-t border-[--border]  '>
          <PaginationComponent
            items={faq}
            itemsPerPage={itemsPerPage}
            renderItems={renderAccodion}
          />
        </div>
      </div>

      <Map/>
      <Footer/>
    </>
  );
};

export default Faq;
