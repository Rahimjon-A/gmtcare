import { FaChevronLeft } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const InfoModal = ({ contact, setContact, setMenu }) => {
  const handleClick = () => {
    setContact(0);
    setMenu(false);
  };
  return (
    <div
      className={` ${
        contact == 2 ? 'top-0' : ' top-[-100%] '
      } duration-200  absolute  z-30 w-full `}
    >
      <div className="bg-[#f8f7f3] px-[15px] h-[100vh] ">
        <div className="border-b flex justify-between pt-[14px] pb-[17px] ">
          <FaChevronLeft
            onClick={() => setContact(0)}
            className="w-[24px] h-[24px] cursor-pointer hover:text-[--pri] "
          />
          <p className=" font-medium">Информация</p>
          <IoCloseSharp
            onClick={() => setContact(0)}
            className="w-[24px] h-[24px] cursor-pointer hover:text-[--pri] "
          />
        </div>

        <Link
          onClick={handleClick}
          to={'/dostavka'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Доставка</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/oplata'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Оплата</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/discount'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Акции</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/producers'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Производители</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/blog'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Блог</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/services'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Услуги</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/about/serticats'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Сертификаты</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={handleClick}
          to={'/faq'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>FAQ</p>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default InfoModal;
