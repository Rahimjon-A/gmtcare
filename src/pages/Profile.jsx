import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { BtnG } from '../ui/Btn';
import History from '../components/user/History';
import ProfileHeader from '../components/ProfileHeader';

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

      <ProfileHeader />

      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          Данные о плательщике
        </p>

        <div className="border border-[--border] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px]  bg-white  rounded-[10px] p-[20px] lg:p-[25px]">
          <div className="flex justify-between">
            <div className="flex flex-col lg:gap-[10px] gap-[5px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                Название компании
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

      <History />

      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          Настройки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className=" custom-text font-semibold mb-[20px] ">Показывать в профиле:</p>
            <form className="flex flex-col gap-2">
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
            <p className=" custom-text font-semibold mb-[20px] mt-[20px] md:mt-[0px]  ">
              Получать рассылку по темам:
            </p>
            <form className="flex flex-col gap-2">
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
        <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] ">
          <BtnG title={'Выйти'} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
