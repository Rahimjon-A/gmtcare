import React, { useState, useEffect } from 'react';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, saveOrUpdateDannie } from '../../reducers/gmt';

const ProfileDannie = () => {
  const dispatch = useDispatch();
  const { dannie } = useSelector((state) => state.gmt);

  const [dannieData, setDannieData] = useState({
    dannie1: '',
    dannie2: '',
    dannie3: '',
    dannie4: '',
    dannie5: '',
    dannie6: '',
  });

  useEffect(() => {
    if (dannie) {
      setDannieData(dannie);
    }
  }, [dannie]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDannieData({ ...dannieData, [id]: value });
  };

  const handleInfo = (e) => {
    e.preventDefault();
    dispatch(saveOrUpdateDannie(dannieData));
    dispatch(hideModal('dannieModal'));
  };

  return (
    <ModalCase modalKey="dannieModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
            Добавление плательщика
          </p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('dannieModal'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>

        <form onSubmit={handleInfo}>
          <div className="flex flex-col gap-[25px] mb-[30px] lg:mb-[40px] ">
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="number"
              required
              placeholder="ИНН*"
              id="dannie1"
              value={dannieData.dannie1}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              required
              placeholder="Название*"
              id="dannie2"
              value={dannieData.dannie2}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Адрес доставки*"
              id="dannie3"
              value={dannieData.dannie3}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Сайт*"
              id="dannie4"
              value={dannieData.dannie4}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="email"
              placeholder="Контактный Email*"
              id="dannie5"
              value={dannieData.dannie5}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Должность*"
              id="dannie6"
              value={dannieData.dannie6}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-[15px] items-start :lg:items-center">
            <button
              type="submit"
              className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200"
            >
              Добавить
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

export default ProfileDannie;
