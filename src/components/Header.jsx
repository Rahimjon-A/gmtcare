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
import logo from '../../public/icons/Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import SearchModal from './modals/SearchModal';
import HeaderSort from './HeaderSort';
import HeaderTop from './HeaderTop';
import { showModal } from '../reducers/gmt';
import Auth from './modals/Auth';

const Header = () => {
  const [cat, setCat] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchModal, setSearchModal] = useState('');
  const { cards } = useSelector((state) => state.card);
  const { user } = useSelector((state) => state.gmt);
  const dispatch = useDispatch();

  const handleClick = () => {
    setSearchModal('');
  };

  return (
    <>
      {/* Top navbar */}
      <HeaderTop />

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
                  )}
                </span>
              </span>
            </div>

            <div className=" relative w-full md:w-auto ">
              <div className="flex w-full md:w-[465px] lg:w-[565] bg-[#d5d1e1] border rounded-full relative  ">
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
                  className="ml-[-28px] bg-[#f8f7f3] flex-1 outline-none pl-[44px] text-[14px] rounded-full "
                  placeholder="Поиск"
                  value={searchModal}
                  onChange={(e) => setSearchModal(e.target.value)}
                />
                <label
                  htmlFor="main"
                  className="bg-[#d5d1e1] rounded-full px-2 md:px-4 flex items-center "
                >
                  <IoIosSearch className=" text-[--text]  text-[18px] "></IoIosSearch>
                </label>
                <SearchModal input={searchModal} handleClick={handleClick} />
              </div>
              <Category cat={cat} />
            </div>

            <p className="hidden xl:block text-[#7A7687] text-[12px] font-medium leading-[normal]">
              Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
            </p>
          </div>

          <div className=" items-center gap-[25px] hidden md:flex ">
            {user ? (
              <Link to={`/profile`}>
                <div className="flex cursor-pointer group flex-col items-center gap-1 ">
                  <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
                  <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                    Войти
                  </span>
                </div>
              </Link>
            ) : (
              <div
                onClick={() => dispatch(showModal('auth'))}
                className="flex cursor-pointer group flex-col items-center gap-1 "
              >
                <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Войти
                </span>
              </div>
            )}

            <Link to={'/wishlist'}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 ">
                <GoHeart className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Избранное
                </span>
              </div>
            </Link>

            <Link to={'/compare'}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 ">
                <LuBarChartHorizontalBig className="text-[20px] group-hover:text-[--pri] duration-200 rotate-[-90deg] " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Сравнить
                </span>
              </div>
            </Link>

            <Link to={'/korzinka'}>
              <div className="flex cursor-pointer group flex-col items-center gap-1 relative ">
                <PiShoppingCartSimple className="text-[20px] group-hover:text-[--pri] duration-200 " />
                <span className="hidden lg:block text-[#7A7687] text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer ">
                  Корзина
                </span>
                {cards.length > 0 && (
                  <span className="absolute md:bottom-[13px] md:right-[-8px] lg:bottom-[30px] lg:right-1 flex justify-center items-center text-white font-medium bg-[--pri] rounded-full w-[15px] h-[15px] text-[10px] ">
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
      <HeaderSort />
      <Auth />
    </>
  );
};

export default Header;
