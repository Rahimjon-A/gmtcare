import { FaChevronLeft } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ContactModal = ({ contact, setContact, setMenu }) => {
  return (
    <div
      className={` ${
        contact == 1 ? 'top-0' : ' top-[-100%] '
      } duration-200  absolute  z-30 w-full `}
    >
      <div className="bg-[#f8f7f3] px-[15px] h-[100vh] ">
        <div className="border-b flex justify-between pt-[14px] pb-[17px] ">
          <FaChevronLeft
            onClick={() => setContact(0)}
            className="w-[24px] h-[24px] cursor-pointer hover:text-[--pri] "
          />
          <p className=" font-medium">Контакты</p>
          <IoCloseSharp
            onClick={() => setContact(0)}
            className="w-[24px] h-[24px] cursor-pointer hover:text-[--pri] "
          />
        </div>

        <Link
          onClick={() => {
            setContact(0);
            setMenu(false)
          }}
          to={'/about/vacancy'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Вакансии</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={() => {
            setContact(0);
            setMenu(false)
          }}
          to={'/about/comments'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Отзывы</p>
          <IoIosArrowForward />
        </Link>
        <Link
          onClick={() => {
            setContact(0);
            setMenu(false)
          }}
          to={'/contact'}
          className="flex cursor-pointer hover:text-[--pri] duration-200 hover:underline justify-between items-center py-[15px] border-b border-[--border] "
        >
          <p>Контакты</p>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default ContactModal;
