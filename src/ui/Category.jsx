import { Link } from 'react-router-dom';

const Category = ({ cat , setCat }) => {
  return (
    <ul
      className={`${
        cat ? 'flex' : ' hidden'
      } bg-white p-[15px] rounded-[5px] border border-[--border] absolute top-[2.2rem] left-0 z-20 flex-col gap-2 w-auto `}
    >
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links ">Реанимация </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Хирургия </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Офтальмология </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Лабораторная диагностика </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Акушерство </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Гинекология </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Гистология </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Косметология </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Оториноларингология </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Рентгенология и томография </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Рентгенология и томография </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Стерилизация </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links">Физиотерапия и реабилитация </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className="mb-[7px] custom-links ">Функциональная диагностика </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links ">Новинки </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links ">Распродажи </li>
      </Link>
      <Link onClick={()=> setCat(false) } to={"/kategoriya"} >
        <li className=" custom-links ">Кабинеты под ключ </li>
      </Link>
    </ul>
  );
};

export default Category;
