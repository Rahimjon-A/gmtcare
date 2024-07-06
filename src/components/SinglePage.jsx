import React, { useEffect, useState } from 'react';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { IoIosStar } from 'react-icons/io';
import { BtnG, BtnGG } from '../ui/Btn';
import { FaMinus } from 'react-icons/fa6';
import SingleItem from './singleItems/SingleItem';
import SingleItem2 from './singleItems/SingleItem2';
import SingleItem3 from './singleItems/SingleItem3';
import SingleItem4 from './singleItems/SingleItem4';
import Single5 from './singleItems/Single5';
import { useParams } from 'react-router-dom';
import { myData } from '../library/myData';
import { useDispatch, useSelector } from 'react-redux';
import { addCompare, setWishlist } from '../reducers/wish';
import { decrement, increment, setCards } from '../reducers/card';

const SinglePage = () => {
  const { id } = useParams();
  const data = myData.find((item) => item.id == id);
  const [tab, setTab] = useState(0);
  const [selectImg, setSelectImg] = useState(null);
  const { wishlist, compare } = useSelector((state) => state.wish);
  const { cards } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectImg(data.img);
  }, [id]);

  const isLiked = wishlist.some((cartItem) => cartItem.id === data.id);
  const isCompared = compare.some((cartItem) => cartItem.id === data.id);
  const cardItem = cards.find((card) => card.id === data.id);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Новинка':
        return { backgroundColor: '#E1EFE6', color: '#088269', borderColor: '#088269' };
      case 'Хит продаж':
        return { backgroundColor: '#E6E6FD', color: '#424285', borderColor: '#424285' };
      case '-30%':
        return { backgroundColor: '#FFE095', color: '#AD7B00', borderColor: '#AD7B00' };
      default:
        return { backgroundColor: '#FFFFFF', color: 'inherit', borderColor: 'transparent' };
    }
  };

  return (
    <>
      <div className="container mb-[60px] md:mb-[120px] lg:mb-[150px] mt-[30px] ">
        {data ? (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] lg:gap-[60px] mb-[40px] lg:mb-[60px] ">
            <div className="bg-white p-[100px] lg:h-[509px] overflow-hidden rounded-[10px] border border-[--border] relative ">
              <img src={selectImg} alt="image" className="w-full h-full object-contain" />

              <div className=" absolute  bottom-6 lg:left-6 left-1/2 lg:translate-x-0 -translate-x-1/2 flex gap-[5px] lg:gap-[15px] ">
                {data.slider.map((image, index) => (
                  <div
                    onClick={() => setSelectImg(image)}
                    key={index}
                    className="bg-[#FBFBF9] border-[2px] border-[--border] hover:border-[--pri] rounded-[10px] overflow-hidden  w-[50px] h-[50px]  "
                  >
                    <img src={image} alt="" className=" w-full h-full object-contain " />
                  </div>
                ))}
              </div>

              <span
                style={getStatusStyles(data.status)}
                className={`absolute top-[25px] left-[25px] text-[--pri] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[--pri] py-1 px-[10px] rounded-full`}
              >
                {data.status}
              </span>

              <div className="flex items-center gap-[10px] absolute top-[27px] right-[25px]">
                <LuBarChartHorizontalBig
                  onClick={() => dispatch(addCompare(data))}
                  className={` ${
                    isCompared ? 'text-[--pri] ' : 'text-[--second] '
                  } w-6 h-6 rotate-[-90deg] hover:text-[--pri] duration-200 cursor-pointer`}
                />
                <div onClick={() => dispatch(setWishlist(data))}>
                  {isLiked ? (
                    <GoHeartFill className="w-6 h-6 text-[--pri] duration-200 cursor-pointer" />
                  ) : (
                    <GoHeart className="w-6 h-6 hover:text-[--pri] duration-200 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-[26px] ">
              <p className="text-[#202020] mb-[10px] text-[30px] font-medium leading-[120%]">
                {data.title}
              </p>
              <span className="flex items-center gap-3 mb-[15px] ">
                <span className="flex">
                  <IoIosStar className="text-yellow-500"></IoIosStar>
                  <IoIosStar className="text-yellow-500"></IoIosStar>
                  <IoIosStar className="text-yellow-500"></IoIosStar>
                  <IoIosStar className="text-yellow-500"></IoIosStar>
                  <IoIosStar className="text-slate-300"></IoIosStar>
                </span>
                <span>4.0</span>
              </span>
              <span className="flex flex-col gap-1 mb-[15px] ">
                <p className="text-[12px] text-[--text] ">Категория: {data.category} </p>
                <p className="text-[12px] text-[--text] ">Производитель: Lorem </p>
                <p className="text-[12px] text-[--text] ">Артикул: {data.element} </p>
                <p className="text-[12px] text-[--text] ">
                  {data.isAvailable ? 'В наличии' : 'нет в наличии'}
                </p>
              </span>
              <p className="text-[18px] font-semibold text-[--second] mb-[20px] ">
                {data.price} руб.
              </p>
              <div className="flex flex-col sm:flex-row  gap-[10px] pb-[25px] border-b-[2px] ">
                {cardItem ? (
                  <div className="flex justify-center max-w-[300px] items-center gap-[20px] text-[12px] py-2 lg:py-[8px] px-[20px] lg:px-[20px] border border-[--border]  rounded-full  ">
                    <FaMinus
                      onClick={() => dispatch(decrement(data.id))}
                      className="hover:text-[--pri] cursor-pointer "
                    />
                    <span className="text-[16px] font-semibold text-[--pri]  ">
                      {cardItem ? cardItem.amount : 0}
                    </span>
                    <button
                      onClick={() => dispatch(increment(data.id))}
                      className="text-[20px] font-semibold hover:text-[--pri] cursor-pointer focus:text-[--pri] "
                    >
                      +
                    </button>
                  </div>
                ) : null}
                <div className="flex gap-[10px] ">
                  <BtnGG title={'Задать вопрос'} />
                  <span
                    onClick={() =>
                      dispatch(setCards({ ...data, amount: cardItem ? cardItem.amount + 1 : 1 }))
                    }
                  >
                    <BtnG title={'Добавить в корзину'} />
                  </span>
                </div>
              </div>

              <div className="mt-[13px] ">
                <p className="text-[16px] font-semibold text-[--second] mb-[15px] ">О товаре</p>
                <p className="text-[12px] w-[60%] lg:w-full font-medium opacity-80  ">
                  Но синтетическое тестирование, в своём классическом представлении, допускает
                  внедрение поэтапного и последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут функционально
                  разнесены.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="hidden md:block border border-[--border] rounded-[10px] ">
          <ul className="flex gap-[15px] lg:gap-[25px]  items-center text-[12px] lg:text-[14px] font-semibold px-[25px] text-[--text] border-b ">
            <li
              onClick={() => setTab(0)}
              className={` ${
                tab == 0
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px]  `}
            >
              Описание оборудования
            </li>
            <li
              onClick={() => setTab(1)}
              className={` ${
                tab == 1
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Характеристики и документы
            </li>
            <li
              onClick={() => setTab(2)}
              className={` ${
                tab == 2
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Услуги и сервис
            </li>
            <li
              onClick={() => setTab(3)}
              className={` ${
                tab == 3
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Оптовым покупателям
            </li>
            <li
              onClick={() => setTab(4)}
              className={` ${
                tab == 4
                  ? 'border-b-[2px] border-[--pri] text-[--second]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Отзывы 4
            </li>
          </ul>
          <div className="bg-white ">
            {tab == 0 ? <SingleItem /> : null}
            {tab == 1 ? <SingleItem2 /> : null}
            {tab == 2 ? <SingleItem3 /> : null}
            {tab == 3 ? <SingleItem4 /> : null}
            {tab == 4 ? <Single5 /> : null}
          </div>

          <ul className=" py-[10px] px-[25px] text-[--pri] text-[12px] font-medium flex gap-10 items-center border-t  ">
            <li className=" cursor-pointer hover:underline">Новинки</li>
            <li className=" cursor-pointer hover:underline">Получить прайс</li>
            <li className=" cursor-pointer hover:underline">Условия доставки</li>
            <li className=" cursor-pointer hover:underline">Способы оплаты</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:hidden ">
          <SingleItem />
          <SingleItem2 />
          <SingleItem3 />
          <SingleItem4 />
          <Single5 />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
