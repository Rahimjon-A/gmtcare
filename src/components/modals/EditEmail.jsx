import React from 'react';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { hideModal } from '../../reducers/gmt';
import { useDispatch } from 'react-redux';

const EditEmial = () => {
  const dispatch = useDispatch();
  return (
    <ModalCase modalKey="editEmail">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Изменить Email</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('editEmail'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>
        <input
          className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
          type="email"
          required
          placeholder="Новый email*"
        />
        <button className="btnG w-full"> Сохранить </button>
      </div>
    </ModalCase>
  );
};

export default EditEmial;
