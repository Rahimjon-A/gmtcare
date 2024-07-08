import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Menu = ({ menu, setMenu, setContact }) => {
  
  return (
    <div className={` ${menu ? 'top-[76px]' : ' top-[-100%] '} duration-200  absolute  z-30 w-full `}>
      <div className="flex justify-between items-center bg-[#E5E4ED] py-[15px] px-[15px]">
        <span className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
          <CiLocationOn />
          <span>Москва</span>
        </span>
        <span className="text-[12px] text-[--text] cursor-pointer  ">Изменить</span>
      </div>

      <div className="bg-[#f8f7f3] p-[15px] border-b border-[--border] flex justify-between ">
        <div>
          <p className="text-[14px] text-[--second] font-semibold ">+7(495)000-00-00</p>
          <p className="text-[12px] text-[--second] font-semibold ">info@mail.ru</p>
          <p className="text-[12px] text-[--text] font-medium ">г. Москва, ул. Московская, д. 35</p>
        </div>
        <p className="text-[12px] text-[--text] font-medium ">
          Пн-Пт с 09:00-19:00 <br />
          Сб-Вс - выходной
        </p>
      </div>

      <div className='bg-[#f8f7f3] px-[15px] h-[70vh] '>
        <Link to={"/catalog"}  onClick={()=> setMenu(false)} className='flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] '>
          <p>Каталог товаров</p>
          <IoIosArrowForward />
        </Link>
        <span onClick={()=> setContact(2)} className='flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] '>
          <p>Информация</p>
          <IoIosArrowForward />
        </span>
        <span onClick={()=> setContact(1)} className='flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] '>
          <p>Контакты</p>
          <IoIosArrowForward />
        </span>
        <Link to={"/about"} onClick={()=> setMenu(false)} className='flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] '>
          <p>О нас</p>
          <IoIosArrowForward />
        </Link>
        <Link to={"/compare"} onClick={()=> setMenu(false)} className='flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] '>
          <p>Сравнение</p>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
