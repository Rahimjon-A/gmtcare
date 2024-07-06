import React from 'react';
import { BtnG } from '../ui/Btn';
import { AiOutlineEdit } from 'react-icons/ai';
import ProfileDannie from './modals/ProfileDannie';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../reducers/gmt';

const Information = () => {
  const dispatch = useDispatch();
  const { dannie } = useSelector((state) => state.gmt);

  return (
    <>
      <div className="container custom-margin grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px]">
          Данные о плательщике
        </p>
        <div className="border border-[--border] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] bg-white rounded-[10px] p-[20px] lg:p-[25px]">
          <div className="flex justify-between">
            <div className="flex flex-col lg:gap-[10px] gap-[5px]">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">Название компании</p>
              <p className="custom-text font-medium">ИНН {dannie?.dannie1}</p>
            </div>
            <AiOutlineEdit
              onClick={() => dispatch(showModal('dannieModal'))}
              className="text-[--pri] text-[24px] cursor-pointer"
            />
          </div>
          <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px]">
              <div className="flex flex-col gap-[4px]">
                <span className="custom-text text-[--text]">Адрес доставки</span>
                <p className="custom-text font-medium">{dannie?.dannie3}</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="custom-text text-[--text]">Сайт</span>
                <p className="custom-text font-medium">{dannie?.dannie4}</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="custom-text text-[--text]">Email</span>
                <p className="custom-text font-medium">{dannie?.dannie5}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px]">
              <div className="flex flex-col gap-[4px]">
                <span className="custom-text text-[--text]">Ваша должность</span>
                <p className="custom-text font-medium">{dannie?.dannie6}</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="custom-text text-[--text]">Тип организации</span>
                <p className="custom-text font-medium">Юридическое лицо</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div onClick={() => dispatch(showModal('dannieModal'))} className={` ${ dannie  ? "hidden" : "flex" } flex justify-end mt-[10px]`}>
          <BtnG title={'Добавить плательщика'} />
        </div>
      </div>
      <ProfileDannie />
    </>
  );
};

export default Information;
