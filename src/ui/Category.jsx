import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cat}) => {
  return (
    <ul className={`${cat ? "flex": " hidden"} bg-white p-[15px] rounded-[5px] border border-[--border] absolute top-[2.2rem] left-0 z-20 flex-col gap-2 w-auto `}>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Реанимация </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Хирургия </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Офтальмология </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Лабораторная диагностика </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Акушерство </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Гинекология </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Гистология </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Косметология </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Оториноларингология </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Рентгенология и томография </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Рентгенология и томография </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Стерилизация </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Физиотерапия и реабилитация </li>
      </Link>
      <Link>
        <li className='text-[12px] mb-[7px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Функциональная диагностика </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Новинки </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Распродажи </li>
      </Link>
      <Link>
        <li className='text-[12px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 '>Кабинеты под ключ </li>
      </Link>

    </ul>
  );
};

export default Category;
