import React from 'react';
import Footer from '../components/home/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../reducers/card';
import { addCompare, setWishlist } from '../reducers/wish';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { BtnG, BtnGG } from '../ui/Btn';
import Title from '../ui/Title';
import { IoIosStar } from 'react-icons/io';

const Compare = () => {
  const { wishlist, compare } = useSelector((state) => state.wish);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCartClick = (e, item) => {
    e.stopPropagation();
    dispatch(setCards(item));
  };

  const handleLikeClick = (e, item) => {
    e.stopPropagation();
    dispatch(setWishlist(item));
  };

  const handleCompare = (e, item) => {
    e.stopPropagation();
    dispatch(addCompare(item));
  };

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
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Сравнение
          </span>
        </Link>
      </div>

      {compare.length > 0 && (
        <>
          <div className="container mb-[30px] lg:mb-[80px]  mt-[40px] md:mt-[50px] lg:mt-[100px]">
            <p className=" custom-title mb-[20px] lg:mb-[40px]"> Сравнение товаров</p>

            <div className="grid gap-[20px] grid-cols-1  lg:grid-cols-[1fr_3fr] ">
              <div className="flex gap-[20px] lg:flex-col lg:gap-[10px] ">
                <p
                  className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--second] custom-text font-medium `}
                >
                  Все товары ({compare.length})
                </p>
                <p
                  className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--text] custom-text font-medium `}
                >
                  Маммографы
                </p>
                <p
                  className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--text] custom-text font-medium `}
                >
                  Флюорографы
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] ">
                  {compare.map((item) => {
                    const isLiked = wishlist.some((cartItem) => cartItem.id === item.id);
                    const isCompared = compare.some((cartItem) => cartItem.id === item.id);
                    return (
                      <div
                        onClick={() => navigate(`/tovar/${item.id}`)}
                        className="rounded-[10px]  w-full max-w-[236px] md:max-w-[320px] border border-[--border] overflow-hidden "
                      >
                        <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[--border]">
                          <img
                            src={item.img}
                            alt="image"
                            className="w-full h-[172px] md:h-[142px] object-contain  lg:h-[229px]"
                          />
                          <span
                            style={getStatusStyles(item.status)}
                            className={`absolute top-[15px] left-[15px] text-[--pri] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[--pri] py-1 px-[10px] rounded-full`}
                          >
                            {item.status}
                          </span>
                          <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
                            <LuBarChartHorizontalBig
                              onClick={(e) => handleCompare(e, item)}
                              className={` ${
                                isCompared ? 'text-[--pri] ' : 'text-[--second] '
                              } w-6 h-6 rotate-[-90deg] hover:text-[--pri] duration-200 cursor-pointer`}
                            />

                            <div onClick={(e) => handleLikeClick(e, item)}>
                              {isLiked ? (
                                <GoHeartFill className="w-6 h-6 text-[--pri] duration-200 cursor-pointer" />
                              ) : (
                                <GoHeart className="w-6 h-6 hover:text-[--pri] duration-200 cursor-pointer" />
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col px-[15px] pb-[10px] lg:pb-[15px]">
                          <div className="flex flex-col   mb-[15px]">
                            <p className="text-[16px] lg:text-[18px] w-[90%] font-semibold leading-[normal] mb-[10px]">
                              {item.title}
                            </p>
                            <span className="text-[12px] font-normal leading-[normal] text-[--text] mb-1">
                              Артикул: {item.element}
                            </span>
                            <span className="text-[12px] font-normal leading-[normal] text-[--text]">
                              {item.isAvailable ? 'В наличии' : 'нет в наличии'}
                            </span>
                            <p className=" mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[--second]">
                              {item.price} руб.
                            </p>
                          </div>

                          <button
                            onClick={(e) => handleCartClick(e, item)}
                            className="text-[10px] md:text-[12px] px-[8px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  "
                          >
                            Добавить в корзину
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" container custom-margin">
            <div className="pb-[20px] border-b border-[--border] ">
              <Title text={'Технические характеристики'} />
            </div>

            <ul className=" flex w-full overflow-x-scroll">
              <li className="border-b">
                <ul className="flex flex-col  text-[12px] pt-[20px] lg:text-[14px] gap-3 border-b ">
                  <li className="text-[--text] border-b min-w-[200px] pb-[20px]  ">Рейтинг</li>

                  {compare.map((item) => (
                    <li className="border-b pb-[20px] ">
                      <span className="flex items-center gap-3 ">
                        <span className="flex">
                          <IoIosStar className="text-yellow-500"></IoIosStar>
                          <IoIosStar className="text-yellow-500"></IoIosStar>
                          <IoIosStar className="text-yellow-500"></IoIosStar>
                          <IoIosStar className="text-yellow-500"></IoIosStar>
                          <IoIosStar className="text-slate-300"></IoIosStar>
                        </span>
                        <span>4.0</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <ul className="flex-col items-center w-full text-[12px] py-[20px] lg:text-[14px] flex gap-3 border-b ">
                  <li className="text-[--text]  border-b pb-[20px]  min-w-[250px] ">
                    Скорость работы
                  </li>

                  {compare.map((item) => (
                    <li className="border-b pb-[20px] w-full win-w-[250px] text-[12px] lg:text-[14px] font-semibold ">
                      60 или 120 тестов в час
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <ul className="flex-col text-[12px] py-[20px] lg:text-[14px] flex gap-3 border-b ">
                  <li className="text-[--text] border-b pb-[20px] min-w-[300px] ">
                    Возможный диапазон длины волны
                  </li>

                  {compare.map((item) => (
                    <li className="border-b pb-[20px] w-full win-w-[300px]  text-[12px] lg:text-[14px] font-semibold ">
                      557, 620, 656 нм
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <ul className="flex-col text-[12px] py-[20px] lg:text-[14px] flex gap-3 border-b ">
                  <li className="text-[--text] border-b pb-[20px] min-w-[250px] ">Тест-полоски</li>

                  {compare.map((item) => (
                    <li className="border-b pb-[20px] w-full win-w-[250px] text-[12px] lg:text-[14px] font-semibold ">
                      На 10 или 11 параметров
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <ul className="flex-col  text-[12px] py-[20px] lg:text-[14px] flex gap-3 border-b ">
                  <li className="text-[--text]  border-b pb-[20px] min-w-[250px] ">
                    Функция автоматической калибровки
                  </li>

                  {compare.map((item) => (
                    <li className="border-b pb-[20px] w-full win-w-[250px] text-[12px] lg:text-[14px] font-semibold ">
                      Есть
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </>
      )}

      {compare.length == 0 && (
        <div className=" container grid grid-cols-1  lg:grid-cols-2 custom-margin  mt-[40px] md:mt-[50px] lg:mt-[100px] ">
          <p className=" custom-title mb-[30px] lg:mb-0 ">Сравнение товаров</p>

          <div className="flex flex-col gap-[20px] lg:gap-[25px] ">
            <p className="text-[18px] md:text-[20px] lg:text-[30px] ">
              Не добавлено товаров в  сравнению
            </p>
            <p className="w-[85%] md:w-1/2 custom-text text-[--text] ">
              Вы можете перейти на главную страницу или воспользоваться каталогом товаров
            </p>
            <div className="flex items-center gap-[10px] ">
              <Link to={'/'}>
                <BtnGG title={'На главную'} />
              </Link>
              <Link to={'/catalog'}>
                <BtnG title={'В каталог'} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Compare;
