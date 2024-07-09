import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../reducers/gmt';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import dr3 from "../../../public/images/dr3.png"

const CallModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalCase modalKey="callModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">Заказать звонок</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('callModal'))}
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-[10px] mb-[30px]">
          <div className="relative w-[50px] h-[50px] rounded-full  ">
            <img
              src={dr3}
              alt=""
              className=" w-full h-full object-cover rounded-full "
            />
            <span className=" absolute bg-[--pri] rounded-full w-[10px] h-[10px] top-[5px] right-0"></span>
          </div>

          <div>
            <p className="custom-text font-medium leading-[128%] lg:leading-[140%] ">
              Олег Сергеевич
            </p>
            <p className="text-[12px] text-[--text] ">Менеджер по продажам</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(hideModal('callModal'));
          }}
        >
          <div className="flex flex-col gap-[25px] mb-[30px] ">
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="email"
              required
              placeholder="Ваш email*"
            />
            <textarea
              className="h-[100px] resize-none pb-[11px] w-full border-b border-[--border] outline-none"
              placeholder="Ваше сообщение"
            ></textarea>
          </div>
          <div className="flex flex-col lg:flex-row gap-[15px] items-start :lg:items-center">
            <button
              type="submit"
              className="text-[12px] whitespace-nowrap bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[20px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  "
            >
              Оставить заявку
            </button>
            <p className="text-[12px] ">
              Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на условиях
              <span className="text-[--pri] "> Политики конфиденциальности. </span>
            </p>
          </div>
        </form>
      </div>
    </ModalCase>
  );
};

export default CallModal;
