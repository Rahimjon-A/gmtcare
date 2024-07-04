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

      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          Данные о плательщике
        </p>

        <div className="border border-[--border] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px]  bg-white  rounded-[10px] p-[20px] lg:p-[25px]">
          <div className="flex justify-between">
            <div className="flex flex-col lg:gap-[10px] gap-[5px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                Название компании{' '}
              </p>
              <p className=" custom-text font-medium">ИНН 9717039181</p>
            </div>
            <AiOutlineEdit className="text-[--pri] text-[24px] cursor-pointer " />
          </div>

          <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] ">
              <div className="flex flex-col gap-[4px] ">
                <span className=" custom-text text-[--text] ">Адрес доставки</span>
                <p className=" custom-text font-medium">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>

              <div className="flex flex-col gap-[4px] ">
                <span className=" custom-text text-[--text] ">Сайт</span>
                <p className=" custom-text font-medium">global-mt.ru </p>
              </div>

              <div className="flex flex-col gap-[4px] ">
                <span className=" custom-text text-[--text] ">Email</span>
                <p className=" custom-text font-medium">info@mail.ru </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] ">
              <div className="flex flex-col gap-[4px] ">
                <span className=" custom-text text-[--text] ">Ваша должность</span>
                <p className=" custom-text font-medium">Менеджер по закупкам</p>
              </div>
              <div className="flex flex-col gap-[4px] ">
                <span className=" custom-text text-[--text] ">Тип организации</span>
                <p className=" custom-text font-medium">Юридическое лицо </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className="flex justify-end mt-[10px]">
          <BtnG title={'Добавить плательщика'} />
        </div>
      </div>

      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          История заказов
        </p>

        <div>
          <div className="border border-[--border] flex flex-col bg-white rounded-[10px] py-[20px] lg:py-[25px]">
            <div className="border-b px-[20px] lg:px-[25px] pb-[25px] ">
              <p className=" custom-text font-medium mb-[10px] ">
                Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.{' '}
              </p>
              <div className="text-[12px] lg:text-[14px] font-semibold flex gap-[10px] items-center  ">
                <span className="text-[--text] ">Статус:</span>
                <span className="bg-[#FFE095] text-[#855E00] border border-[#855E00] rounded-full px-[10px] py-[3px] ">
                  В работе
                </span>
              </div>
            </div>

            <div className="flex justify-end text-[16px] lg:text-[18px] font-semibold mt-[30px] px-[20px] lg:px-[25px]  ">
              <span>Товаров на сумму:</span>
              <span className="ml-[15px] md:ml-[55px]">900 000 </span> руб.
            </div>
          </div>

          <div className="bg-white mt-[10px] p-[20px] lg:p-[25px] border border-[--border] rounded-[10px] ">
            <p className=" custom-text font-medium mb-[10px] ">
              Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.{' '}
            </p>

            <div className="text-[12px] lg:text-[14px] font-semibold flex gap-[10px] items-center  ">
              <span className="text-[--text] ">Статус:</span>
              <span className="bg-[#E1EFE6] text-[--pri] border rounded-full px-[10px] py-[3px] ">
                Доставлено
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          Настройки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className=" custom-text font-semibold mb-[20px] ">Показывать в профиле:</p>
            <form className='flex flex-col gap-2'>
              <label
                htmlFor=""
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="name" id="" className=" accent-[--pri]" />
                Имя
              </label>

              <label
                htmlFor="surname"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="surname" id="" className=" accent-[--pri]" />
                Фамилия
              </label>

              <label
                htmlFor="phone"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="phone" id="" className=" accent-[--pri]" />
                Телефон
              </label>

              <label
                htmlFor="email"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="email" id="" className=" accent-[--pri]" />
                Email
              </label>
            </form>
          </div>

          <div>
            <p className=" custom-text font-semibold mb-[20px] mt-[20px] md:mt-[0px]  ">Получать рассылку по темам:</p>
            <form className='flex flex-col gap-2'>
              <label
                htmlFor=""
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="name" id="" className=" accent-[--pri]" />
                Скидки и акции
              </label>

              <label
                htmlFor="surname"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="surname" id="" className=" accent-[--pri]" />
                Снизилась цена на избранное
              </label>
            </form>
          </div>
        </div>
        <div></div>
       <div className='mt-[50px] md:mt-[80px] lg:mt-[100px] '>
       <BtnG title={"Выйти"} />
       </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
