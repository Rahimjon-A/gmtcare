import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { HiOutlineHome } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { handleActive } from '../reducers/gmt';

const MobileNav = () => {

  const {active} = useSelector(state => state.gmt);
  const dispatch = useDispatch()

  return (
    <div className=" container bg-[#F8F7F3] border-t border-[--border] py-[10px] flex md:hidden justify-between items-center ">
    
      <div onClick={()=> dispatch(handleActive(0))} className={` ${ active === 0 ? "text-[--pri] " : "text-[--second] " } flex cursor-pointer group flex-col items-center gap-1 `}>
        <HiOutlineHome className="text-[20px] group-hover:text-[--pri] duration-200  " />
        <span className={` ${ active === 0 ? "text-[--pri] " : "text-[#7A7687]" } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}>
          Сравнить
        </span>
      </div>

      <div onClick={()=> dispatch(handleActive(1))} className={` ${ active === 1 ? "text-[--pri] " : "text-[--second] " } flex cursor-pointer group flex-col items-center gap-1 `}>
        <MdManageSearch className="text-[24px] group-hover:text-[--pri] duration-200 " />
        <span className={` ${ active === 1 ? "text-[--pri] " : "text-[#7A7687]" } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}>
          Сравнить
        </span>
      </div>

      <div onClick={()=> dispatch(handleActive(2))} className={` ${ active === 2 ? "text-[--pri] " : "text-[--second] " } flex cursor-pointer group flex-col items-center gap-1 `}>
        <PiShoppingCartSimple className="text-[20px] group-hover:text-[--pri] duration-200 " />
        <span className={` ${ active === 2 ? "text-[--pri] " : "text-[#7A7687]" } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}>
          Корзина
        </span>
      </div>

      <div onClick={()=> dispatch(handleActive(3))} className={` ${ active === 3 ? "text-[--pri] " : "text-[--second] " } flex cursor-pointer group flex-col items-center gap-1 `}>
        <GoHeart className="text-[20px] group-hover:text-[--pri] duration-200 " />
        <span className={` ${ active === 3 ? "text-[--pri] " : "text-[#7A7687]" } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}>
          Избранное
        </span>
      </div>

      <div onClick={()=> dispatch(handleActive(4))} className={` ${ active === 4 ? "text-[--pri] " : "text-[--second] " } flex cursor-pointer group flex-col items-center gap-1 `}>
        <FaRegUser className="text-[20px] group-hover:text-[--pri] duration-200 " />
        <span className={` ${ active === 4 ? "text-[--pri] " : "text-[#7A7687]" } text-[12px] font-medium leading-[normal] group-hover:text-[--pri] duration-200 cursor-pointer `}>
          Войти
        </span>
      </div>
    </div>
  );
};

export default MobileNav;
