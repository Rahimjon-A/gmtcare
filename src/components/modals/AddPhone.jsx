import React, { useState } from 'react';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { hideModal, savePhoneNumber } from '../../reducers/gmt';

const AddPhone = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  const handleSavePhone = (e) => {
    e.preventDefault();
    dispatch(savePhoneNumber(phone));
    dispatch(hideModal('addPhone'));
  };

  return (
    <ModalCase modalKey="addPhone">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Изменить Телефон</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('addPhone'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>
        <form onSubmit={handleSavePhone}>
          <input
            className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
            type="number"
            required
            placeholder="Телефон*"
            value={phone}
            onChange={handleInputChange}
          />
          <button type="submit" className="btnG w-full">Сохранить</button>
        </form>
      </div>
    </ModalCase>
  );
};

export default AddPhone;
