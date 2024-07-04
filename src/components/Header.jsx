import { CiLocationOn } from 'react-icons/ci';
import { FaCaretDown, FaRegUser } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { RiMenu2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BtnG, BtnW } from '../ui/Btn';
import { FiPhone } from 'react-icons/fi';
import { IoMenuSharp } from 'react-icons/io5';
import Category from '../ui/Category';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Menu from '../ui/Menu';
import logo from '../../public/Logo.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const [cat, setCat] = useState(false);
  const [menu, setMenu] = useState(false);
  const { cards } = useSelector((state) => state.card);

  return (
    <>
      {/* Top navbar */}
      <div className=" hidden md:block border-b py-[10px]">
        <div className=" flex justify-between  container ">
          <ul className="flex items-center gap-[20px] ">
            <li className="group relative">
              <Link
                to={'/about'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                О компании
              </Link>

              <ul className=" absolute text-[12px] w-[180px] z-20  flex-col bg-white border border-[--border] rounded-[10px] gap-[5px] py-[10px] px-[12px] hidden group-hover:flex ">
                <li className=" cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 ">
                  <Link to={'/about/vacancy'}>Вакансии</Link>
                </li>
                <li className=" cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 ">
                  <Link to={'/about/comments'}>Отзывы</Link>
                </li>
                <li className=" cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 ">
                  <Link to={'/about/serticats'}>Сертификаты</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to={'/dostavka'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                Доставка
              </Link>
            </li>
            <li>
              <Link
                to={'/oplata'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                Оплата
              </Link>
            </li>
            <li>
              <Link
                to={'/grants'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                Гарантии
              </Link>
            </li>
            <li className=" relative group">
              <Link
                to={'/blog'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                Блог
              </Link>
              <ul className=" absolute text-[12px] w-auto z-20  flex-col bg-white border border-[--border] rounded-[10px] gap-[5px] py-[10px] px-[12px] hidden group-hover:flex ">
                <li className=" cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 ">
                  <Link to={'/blog/news'}>Новости</Link>
                </li>
                <li className=" cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 ">
                  Статьи
                </li>
              </ul>
            </li>
          </ul>

          <ul className="flex items-center gap-[45px] ">
            <li>
              <Link
                to={'/'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                info@mail.ru
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                className="text-[12px] text-[--text] hover:text-[--pri] duration-200 font-medium leading-[normal]"
              >
                г. Москва, ул. Московская, д. 35
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* search bar */}
      <div className="border-b md:py-[25px]">
        <div className=" flex justify-between gap-5 container ">
          <div className="flex flex-col md:flex-row items-start gap-[25px] lg:gap-[35px] w-full ">
            <Link to={'/'}>
              <img
                src={logo}
                alt="logo"
                className=" hidden md:block md:w-[73px] md:h-[30px] lg:w-[96px] lg:h-[41px] lg:mr-[16px] "
              />
            </Link>

            <div className="flex  md:hidden justify-between items-center w-full  ">
              <img src={logo} alt="logo" className="w-[96px] h-[41px] mr-[16px] " />
              <span className="flex  items-center gap-[20px] ">
                <FiPhone className="w-[24px] h-[24px] " />
                <span
                  onClick={() => setMenu((prev) => !prev)}
                  className=" cursor-pointer hover:text-[--pri] duration-200 "
                >
                  {menu ? (
                    <AiOutlineClose className="w-[30px] h-[30px] " />
                  ) : (
                    <IoMenuSharp className="w-[30px] h-[30px] " />
                  )}{' '}
                </span>
              </span>
            </div>

            <div className=" relative w-full md:w-auto ">
              <div className="flex w-full md:w-[465px] lg:w-[565] bg-[#d5d1e1] border rounded-full overflow-hidden ">
                <span
                  onClick={() => setCat((prev) => !prev)}
                  className="flex relative cursor-pointer gap-1 items-center  z-10 bg-[#EFEFEF] py-2 px-2 md:px-4 rounded-full text-[12px] text-[--text] font-semibold min-w-[117px] "
                >
                  Все категории{' '}
                  <FaCaretDown className={`${cat ? ' rotate-180' : ''} duration-200 `} />
                </span>
                <input
                  type="text"
                  id="main"
                  className="ml-[-28px] f  bg-[#f8f7f3] flex-1 outline-none pl-[44px] text-[14px] rounded-full "
                  placeholder="Поиск"
                />
                <label htmlFor="main" className="bg-[#d5d1e1] px-2 md:px-4 flex items-center ">
                  <IoIosSearch className=" text-[--text]  text-[18px] "></IoIosSearch>
                </label>
              </div>
              <Category cat={cat} />
            </div>

            <p className="hidden xl:block text-[#7A7687] text-[12px] font-medium leading-[normal]">
              Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
            </p>
          </div>

          <div className=" items-center gap-[25px] hidden md:flex ">
            <Link to={'/profile'}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 ">
                <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Войти
                </span>
              </div>
            </Link>

            <Link to={"/wishlist"}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 ">
                <GoHeart className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Избранное
                </span>
              </div>
            </Link>

            <div className="flex cursor-pointer group flex-col items-center gap-1 ">
              <LuBarChartHorizontalBig className="text-[20px] group-hover:text-[--pri] duration-200 rotate-[-90deg] " />
              <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                Сравнить
              </span>
            </div>

            <Link to={'/korzinka'}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 relative ">
                <PiShoppingCartSimple className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Корзина
                </span>
                {cards.length > 0 && (
                  <span className="absolute bottom-[30px] right-1 flex justify-center items-center text-white font-medium bg-[--pri] rounded-full w-[15px] h-[15px] text-[10px] ">
                    {cards.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
        <Menu menu={menu} />
      </div>

      {/* sort / categories */}
      <div className="border-b hidden md:block py-[20px]">
        <div className=" flex justify-between container ">
          <ul className="text-[--second] flex items-center gap-[15px] lg:gap-[25px] ">
            <Link to={'/catalog'}>
              <li className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
                <RiMenu2Fill />
                <span>Каталог</span>
              </li>
            </Link>
            <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <Link to={'/producers'}> Производители</Link>
            </li>
            <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <Link to={'kobinet'}>Кабинеты под ключ</Link>
            </li>
            <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <Link to={'/services'}>Услуги</Link>
            </li>
            <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <Link to={'/discount'}> Акции</Link>
            </li>
            <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <Link to={'/contact'}> Контакты</Link>
            </li>
          </ul>

          <div className="flex gap-[17px] items-center ">
            <span className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
              <span>Москва</span>
              <CiLocationOn />
            </span>

            <div className="bg-[--pri] rounded-full text-white p-2 xl:hidden ">
              <FiPhone />
            </div>
            <div className=" gap-[10px] hidden xl:flex ">
              <BtnW title={'+7(495)000-00-00'} />
              <BtnG title={'Заказать звонок'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
