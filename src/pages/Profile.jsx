import React from 'react';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaFacebookF, FaOdnoklassniki, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineEdit } from 'react-icons/ai';
import { BtnG, BtnW } from '../ui/Btn';

const Profile = () => {
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
            Личный кабинет
          </span>
        </Link>
      </div>

      <div className="mt-[40px] md:mt-[50px] lg:mt-[100px] container custom-margin  ">
        <div className="flex flex-wrap gap-[25px] md:gap-[66px] lg:gap-[120px] ">
          <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[210px] lg:h-[210px] rounded-full bg-[#E1EFE6] relative ">
            <img src="" alt="" />
            <span className=" absolute text-[60px] md:text-[70p] w-full h-full flex items-center justify-center">
              K
            </span>
          </div>

          <div className="flex flex-col gap-[60px] md:gap-[40px] lg:gap-[50px]  ">
            <div>
              <p className="text-[18px] md:text-[20px] lg:text-[30px] mb-[20px] font-medium ">
                Константин Константинопольский
              </p>
              <div className="flex gap-[15px] items-center text-[--second] mb-[30px] lg:mb-[40px] ">
                <SlSocialVkontakte className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                <FaFacebookF className="w-[22px] h-[22px] hover:text-[--pri] duration-200 cursor-pointer " />
                <AiFillInstagram className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                <FaTwitter className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                <FaOdnoklassniki className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
              </div>

              <div className="flex flex-wrap items-center gap-[10px] ">
                <BtnW title={'Изменить персональную информацию'} />
                <BtnW title={'Изменить пароль'} />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  +7 911 564–86–86 <AiOutlineEdit className="text-[--pri] text-[20px] " />
                </p>
                <span className=" custom-text text-[--text] ">Телефон</span>
              </div>
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  person@mail.ru <AiOutlineEdit className="text-[--pri] text-[20px] " />
                </p>
                <span className=" custom-text text-[--text] ">Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container custom-margin grid grid-cols-[1fr_3fr] ">

        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] ">
          Данные о плательщике
        </p>

        <div className="border border-[--border]  bg-white  rounded-[10px] p-[20px] lg:p-[25px]"></div>
        
        <div></div>
        <div className='flex justify-end mt-[10px]'>
        <BtnG title={"Добавить плательщика"}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
