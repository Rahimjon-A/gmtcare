import React from 'react';
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './customStyles.css';
import { Link } from 'react-router-dom';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'Покупателям',
    children: (
      <ul className="flex flex-col gap-2">
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">О компании</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Сертификаты</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Вакансии</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Гарантии</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Услуги</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Акции</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Доставка</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Оплата</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Возврат</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">FAQ</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Лизинг</li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 "><Link>Отзывы</Link> </li>
        <li className="text-[12px] lg:text-[14px] cursor-pointer hover:opacity-50 ">Блог</li>
      </ul>
    ),
  },
  {
    key: '2',
    label: 'Каталог',
    children: (
      <ul className="flex flex-col gap-2">
        <li className="text-[12px] lg:text-[14px] ">Реанимация</li>
        <li className="text-[12px] lg:text-[14px] ">Хирургия</li>
        <li className="text-[12px] lg:text-[14px] ">Офтальмология</li>
        <li className="text-[12px] lg:text-[14px] ">Лабораторная диагностика</li>
        <li className="text-[12px] lg:text-[14px] ">Акушерство и Гинекология</li>
        <li className="text-[12px] lg:text-[14px] ">Гистология</li>
        <li className="text-[12px] lg:text-[14px] ">Косметология</li>
        <li className="text-[12px] lg:text-[14px] ">Орториноларингология</li>
        <li className="text-[12px] lg:text-[14px] ">Рентгенология и томография</li>
        <li className="text-[12px] lg:text-[14px] ">Стрерилизация</li>
        <li className="text-[12px] lg:text-[14px] ">Физиотерапия и реабилитация</li>
        <li className="text-[12px] lg:text-[14px] ">Функциональная диагностика</li>
        <li className="text-[12px] lg:text-[14px] ">Эндоскопия</li>
        <li className="text-[12px] lg:text-[14px] ">Новинки</li>
        <li className="text-[12px] lg:text-[14px] ">Распродажи</li>
        <li className="text-[12px] lg:text-[14px] ">Кабинеты под ключ</li>
        <li className="text-[12px] lg:text-[14px] ">Скачать каталог</li>
      </ul>
    ),
  },
  {
    key: '3',
    label: 'Контакты',
    children: (
      <div>
        <p className="text-[12px] lg:text-[14px] font-semibold ">Адрес:</p>
        <p className="text-[12px] lg:text-[14px] mb-[10px] ">г. Москва, ул. Московская, д. 35 </p>
        <p className="text-[12px] lg:text-[14px] mb-[10px] ">Карта проезда</p>
        <p className="text-[12px] lg:text-[14px] ">График работы:</p>
        <p className="text-[12px] lg:text-[14px] mb-[10px] ">
          Пн-Пт с 09:00-19:00, Сб-Вс - выходной
        </p>
        <p className="text-[12px] lg:text-[14px] ">
          +7 000-000-00-00 <br />
          +7 495-000-00-00 <br />
          8 800-000-00-00 <br />
          info@mail.ru
        </p>
      </div>
    ),
  },
];

const App = () => (
  <Collapse
    accordion
    items={items.map((item) => ({
      ...item,
      showArrow: false,
      extra: <PlusOutlined className="plus-icon" />,
    }))}
  />
);

export default App;
