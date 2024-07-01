import React from 'react';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Oplata = () => {
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
            Оплата
          </span>
        </Link>
      </div>

      <div className=" container mt-[40px] md:mt-[50px] lg:mt-[100px]">
        <div className=" custom-margin">
          <p className=" custom-title mb-[20px] lg:mb-[40px] ">Оплата</p>
          <p className=" custom-text mb-[25px] md:mb-[40px] w-full md:w-[80%] lg:w-[55%]  ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] ">
            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                Оплата наличными
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
                <li>Также как постоянное обеспечение нашей </li>
              </ul>
            </div>
            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                Безналичный расчет
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
                <li>Также как постоянное обеспечение нашей </li>
                <li>Также как постоянное</li>
              </ul>
            </div>
            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]  md:col-span-2 lg:col-span-1 ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                Оплата банковской картой
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
                <li>Также как постоянное</li>
                <li>Также как постоянное обеспечение </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mt-[40px] md:mt-[50px] lg:mt-[100px]">
        <div className=" custom-margin">
          <p className=" custom-title mb-[20px] lg:mb-[40px] ">Порядок возврата денежных средств</p>
          <p className=" custom-text mb-[25px] md:mb-[40px] w-full md:w-[80%] lg:w-[55%]  ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] ">
            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                При оплате наличными
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
              </ul>
            </div>

            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                При оплате банковской картой
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
                <li>Также как постоянное обеспечение нашей </li>
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mt-[40px] md:mt-[50px] lg:mt-[100px]">
        <div className=" custom-margin">
          <p className=" custom-title mb-[20px] lg:mb-[40px] ">Условия поставок</p>
          <p className=" custom-text mb-[25px] md:mb-[40px] w-full md:w-[80%] lg:w-[55%]  ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] ">
            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                Лизинг
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
                <li>Также как постоянное</li>
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
              </ul>
            </div>

            <div className="bg-white border-[--border] border rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold pb-[10px] lg:pb-[15px]">
                Рассрочка
              </p>
              <ul className="list-decimal pl-[20px] text-[--text] custom-text ">
                <li>
                  Требующим обновления приборов в различных направлениях, от установок компьютерной
                  томографии
                </li>
                <li>Также как постоянное </li>
                <li>Также как постоянное обеспечение нашей</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Map />
      <Footer />
    </>
  );
};

export default Oplata;
