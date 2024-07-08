import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
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
                <Link to={'/blog/news'}>Статьи</Link>
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
  );
};

export default HeaderTop;
