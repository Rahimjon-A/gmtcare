import React from 'react';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { hideModal } from '../../reducers/gmt';
import { HiCamera } from 'react-icons/hi';
import { BtnG } from '../../ui/Btn';
import { useDispatch } from 'react-redux';

const ProfileImg = ({ handleImageChange }) => {
  const dispatch = useDispatch();
  return (
    <ModalCase modalKey="profileImg">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Регистрация</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('profileImg'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>

        <label
          htmlFor="profile"
          className="flex cursor-pointer mb-[50px] flex-col gap-[10px] justify-center items-center py-[77px] border border-dashed border-[--border] rounded-[10px] "
        >
          <label htmlFor="profile">Выбор изображения профиля</label>
          <p className="text-[--pri] flex items-center gap-[10px] ">
            <HiCamera /> Выберите файл
          </p>
          <input type="file" name="profile" id="profile" hidden onChange={handleImageChange} />
        </label>

        <div className="flex justify-center">
          <span onClick={() => dispatch(hideModal('profileImg'))}>
            <BtnG title={'Отменить'} />{' '}
          </span>
        </div>
      </div>
    </ModalCase>
  );
};

export default ProfileImg;
