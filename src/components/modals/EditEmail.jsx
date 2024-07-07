import React, { useState } from 'react';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, updateUser } from '../../reducers/gmt';


const EditEmail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.gmt);
  const [email, setEmail] = useState(user?.email || '');
 
  const handleSaveEmail = (e) => {
    e.preventDefault();
    dispatch(updateUser({ email, password: user?.password }));
    dispatch(hideModal('editEmail'));
  };

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
        <form onSubmit={handleSaveEmail}>
          <input
            className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
            type="email"
            required
            placeholder="Новый email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btnG w-full">Сохранить</button>
        </form>
      </div>
    </ModalCase>
  );
};

export default EditEmail;
