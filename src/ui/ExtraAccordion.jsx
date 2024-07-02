import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Accordion.css';
import Title from './Title';

const Accordion = ({ title, show = true }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = Array.isArray(title) ? title : [title];

  return (
    <div className={` ${show ? 'bg-[#E5E4ED] custom-margin' : ' bg-transparent'}  `}>
      <div
        className={`${
          show ? 'grid-cols-1 lg:grid-cols-2  py-[60px] md:py-[50px] lg:py-[110px]' : 'grid-cols-1'
        } container grid  gap-[30px] lg:gap-0`}
      >
        <div className={`${show ? 'block' : 'hidden'}`}>
          <div className="w-[80%]">
            <Title text={'Документы, необходимые для получения груза'} />
            <p className="text-[--second] pt-[10px] md:pt-[20px] lg:pt-[25px]">
              По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами
              отгрузка не производится
            </p>
          </div>
        </div>

        <div className="border-t border-[--border]">
          {accordionItems.map((item, index) => (
            <div key={index} className={` ${show ? "border-b border-[--border]" : ""} `}>
              <div
                className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
                  {item.title}
                </span>
                <span
                  className={`${
                    activeIndex === index ? 'rotate-45 text-white bg-[--pri]' : 'rotate-0'
                  } duration-200 border-[--border] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
                >
                  +
                </span>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={300}
                classNames="accordion"
                unmountOnExit
              >
                <div className="pb-2">
                  <p className="custom-text text-[--text]">
                    Но синтетическое тестирование, в своём классическом представлении, допускает
                    внедрение поэтапного и последовательного развития общества. В рамках
                    спецификации современных стандартов, сторонники тоталитаризма в науке будут
                    функционально разнесены.
                  </p>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
