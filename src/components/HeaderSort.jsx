import React from 'react'
import { BtnG, BtnW } from '../ui/Btn'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { RiMenu2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { showModal } from '../reducers/gmt'

const HeaderSort = ({city}) => {
  const dispatch = useDispatch();
  return (
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
        <span onClick={()=> dispatch(showModal("cityModal"))} className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
          <span>{city} </span>
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
  )
}

export default HeaderSort