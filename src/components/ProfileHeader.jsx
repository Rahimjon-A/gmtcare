import React, { useState } from 'react';
import { AiFillInstagram, AiOutlineEdit } from 'react-icons/ai';
import { FaFacebookF, FaOdnoklassniki, FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { BtnW } from '../ui/Btn';
import ProfileImg from './modals/ProfileImg';
import PersonalInfo from './modals/PersonalInfo';
import { showModal } from '../reducers/gmt';
import EditEmial from './modals/EditEmail';

const ProfileHeader = () => {
  const { user, personal } = useSelector((state) => state.gmt);
  const email = user[0].email || '';
  const firstLetter = email.charAt(0).toUpperCase();
  const [isActive, setIsActive] = useState(false);
  
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-[40px] md:mt-[50px] lg:mt-[100px] container custom-margin  ">
        <div className="flex flex-wrap gap-[25px] md:gap-[66px] lg:gap-[120px] ">
          <div className=" relative">
            <div className="w-[140px] group overflow-hidden h-[140px] md:w-[180px] md:h-[180px] lg:w-[210px] lg:h-[210px] rounded-full bg-[#E1EFE6] relative ">
              <img src="/blog2.png" alt="" className="w-full h-full object-cover " />
              <span className=" z-20 absolute text-[60px] md:text-[70p] w-full h-full flex items-center justify-center">
                {firstLetter}
              </span>

              <div
                className={` ${
                  isActive ? 'block' : 'hidden'
                }  cursor-pointer  group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 `}
              >
                <div
                  onClick={() => setIsActive((prev) => !prev)}
                  className=" bg-[--pri]  rounded-full w-[24px] h-[24px] flex justify-center items-center "
                >
                  <AiOutlineEdit className="text-white  " />
                </div>
              </div>
            </div>
            <div
              className={` ${
                isActive ? 'flex' : 'hidden'
              } absolute md:bottom-[-20px] lg:bottom-[-5px] left-1/2 -translate-x-1/2 bg-white  flex-col gap-[10px] rounded-[5px] py-[10px] px-[12px] `}
            >
              <p
                onClick={() => dispatch(showModal('profileImg'))}
                className=" cursor-pointer text-[12px] "
              >
                Редактировать
              </p>
              <p className=" cursor-pointer text-[12px] text-[#C13515] ">Удалить фото</p>
            </div>
          </div>

          <div className="flex flex-col gap-[60px] md:gap-[40px] lg:gap-[50px]  ">
            <div>
              <p className="text-[18px] md:text-[20px] lg:text-[30px] mb-[20px] font-medium capitalize ">
                {personal?.firstname ? `${personal.firstname} ${personal.lastname}` : 'Имя'}
              </p>
              <div className="flex gap-[15px] items-center text-[--second] mb-[30px] lg:mb-[40px] ">
                <a href={`https://${personal?.vk}`}>
                  <SlSocialVkontakte className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />{' '}
                </a>

                <a href={`https://${personal?.facebook}`}>
                  <FaFacebookF className="w-[22px] h-[22px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a target="_blank" href={`https://${personal?.instagram}`}>
                  <AiFillInstagram className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a href={`https://${personal?.twitter}`}>
                  <FaTwitter className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a target="_blank" href={`https://${personal?.odno}`}>
                  <FaOdnoklassniki className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-[10px] ">
                <span onClick={() => dispatch(showModal('personalInfo'))}>
                  <BtnW title={'Изменить персональную информацию'} />{' '}
                </span>
                <BtnW title={'Изменить пароль'} />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  +998 00 000–00–00 <AiOutlineEdit className="text-[--pri] text-[20px] " />
                </p>
                <span className=" custom-text text-[--text] ">Телефон</span>
              </div>
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  {email} <AiOutlineEdit onClick={()=> dispatch(showModal("editEmail"))} className=" cursor-pointer text-[--pri] text-[20px] " />
                </p>
                <span className=" custom-text text-[--text] ">Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileImg />
      <PersonalInfo />
      <EditEmial/>
    </>
  );
};

export default ProfileHeader;