import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { HiOutlineHome } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { handleActive, showModal } from '../reducers/gmt';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const { active, user } = useSelector((state) => state.gmt);
  const { wishlist, compare } = useSelector((state) => state.wish);
  const { cards } = useSelector((state) => state.card);

  const dispatch = useDispatch();

  return (
    <div className=" container bg-[#F8F7F3] border-t border-[--border] py-[10px] flex md:hidden justify-between items-center ">
      <Link
        to={'/'}
        onClick={() => dispatch(handleActive(0))}
        className={` ${
          active === 0 ? 'text-[--pri] ' : 'text-[--second] '
        } flex cursor-pointer group flex-col items-center gap-1 `}
      >
        <HiOutlineHome className="text-[20px] group-hover:text-[--pri] duration-200  " />
        <span
          className={` ${
            active === 0 ? 'text-[--pri] ' : 'text-[#7A7687]'
          } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
        >
          Сравнить
        </span>
      </Link>

      <Link
        to={'/compare'}
        onClick={() => dispatch(handleActive(1))}
        className={` ${
          active === 1 ? 'text-[--pri] ' : 'text-[--second] '
        } flex cursor-pointer group flex-col items-center gap-1 relative `}
      >
        <MdManageSearch className="text-[24px] group-hover:text-[--pri] duration-200 " />

        <span
          className={` ${
            active === 1 ? 'text-[--pri] ' : 'text-[#7A7687]'
          } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
        >
          Сравнить
        </span>

        {compare.length > 0 && (
          <span className="absolute right-[9px] bottom-[30px] flex justify-center items-center text-white font-medium bg-[--pri] rounded-full w-[15px] h-[15px] text-[10px] ">
            {compare.length}
          </span>
        )}
      </Link>

      <Link
        to={'/korzinka'}
        onClick={() => dispatch(handleActive(2))}
        className={` ${
          active === 2 ? 'text-[--pri] ' : 'text-[--second] '
        } flex cursor-pointer group flex-col items-center gap-1 relative `}
      >
        <PiShoppingCartSimple className="text-[20px] group-hover:text-[--pri] duration-200 " />
        <span
          className={` ${
            active === 2 ? 'text-[--pri] ' : 'text-[#7A7687]'
          } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
        >
          Корзина
        </span>

        {cards.length > 0 && (
          <span className="absolute right-[5px] bottom-[30px] flex justify-center items-center text-white font-medium bg-[--pri] rounded-full w-[15px] h-[15px] text-[10px] ">
            {cards.length}
          </span>
        )}
      </Link>

      <Link
        to={'/wishlist'}
        onClick={() => dispatch(handleActive(3))}
        className={` ${
          active === 3 ? 'text-[--pri] ' : 'text-[--second] '
        } flex cursor-pointer group flex-col items-center gap-1 relative `}
      >
        <GoHeart className="text-[20px] group-hover:text-[--pri] duration-200 " />
        <span
          className={` ${
            active === 3 ? 'text-[--pri] ' : 'text-[#7A7687]'
          } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
        >
          Избранное
        </span>
        {wishlist.length > 0 && (
          <span className="absolute right-[13px] bottom-[30px] flex justify-center items-center text-white font-medium bg-[--pri] rounded-full w-[15px] h-[15px] text-[10px] ">
            {wishlist.length}
          </span>
        )}
      </Link>

      {user ? (
        <Link
          to={'/profile'}
          onClick={() => dispatch(handleActive(4))}
          className={` ${
            active === 4 ? 'text-[--pri] ' : 'text-[--second] '
          } flex cursor-pointer group flex-col items-center gap-1 `}
        >
          <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
          <span
            className={` ${
              active === 4 ? 'text-[--pri] ' : 'text-[#7A7687]'
            } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
          >
            Профиль
          </span>
        </Link>
      ) : (
        <Link
          onClick={() => {
            dispatch(handleActive(4));
            dispatch(showModal('auth'));
          }}
          className={` ${
            active === 4 ? 'text-[--pri] ' : 'text-[--second] '
          } flex cursor-pointer group flex-col items-center gap-1 `}
        >
          <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
          <span
            className={` ${
              active === 4 ? 'text-[--pri] ' : 'text-[#7A7687]'
            } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}
          >
            Войти
          </span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
