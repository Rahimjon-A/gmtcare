import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../components/home/Footer';
import Map from '../components/home/Map';
import Title from '../ui/Title';
import besh from '../../public/beshburchak.svg';
import star from '../../public/dasIcon2.svg';
import line from '../../public/line.svg';
import seven from '../../public/dasIcon1.svg';
import { BtnG, BtnGG, BtnW, BtnWG } from '../ui/Btn';

const Grants = () => {
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
            Гарантии
          </span>
        </Link>
      </div>

      <div className="container mt-[40px] md:mt-[50px] lg:mt-[100px] mb-[60px] md:mb-[120px] lg:mb-[80px] ">
        <p className=" custom-title pb-[20px] lg:pb-[40px] ">Гарантии</p>
        <div className="xl:w-1/2 lg:w-3/4 md:w-5/6 w-full ">
          <p className=" custom-text mb-[15px] md:mb-[20px] ">
            Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной
            эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет
            выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних
            сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам.
          </p>
          <p className=" custom-text mb-[10px] md:mb-[20px] lg:mb-[10px] ">
            Являясь авторизованным дилером брендов, продукция которых представлена в каталоге,
            компания:
          </p>

          <ul className="custom-text list-decimal pl-[25px] mb-[15px] md:mb-[20px] ">
            <li>Предоставляет услуги сервисного и гарантийного обслуживания.</li>
            <li>Осуществляет поставку оригинальных запчастей и комплектующих.</li>
            <li>
              Обучает медицинский персонал работе с современным высокотехнологичным оборудованием.
            </li>
          </ul>
          <p className="custom-text">
            Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая
            своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем
            клиентам возможность воспользоваться услугами квалифицированных мастеров в установке,
            пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования.
          </p>
        </div>
      </div>

      <div className="container custom-margin ">
        <div className="mb-[25px] md:mb-[30px] lg:mb-[40px] ">
          <Title text={'Перечень гарантийных услуг'} />
        </div>

        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 mb-[30px] md:mb-[25px] lg:mb-[40px] ">
          <div className=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
            <img src={besh} alt="image" />
            <p className=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
              Установка, настройка и пуско-наладка медтехники
            </p>
          </div>
          <div className=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
            <img src={seven} alt="image" />
            <p className=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
              Сервисное обслуживание медицинской техники любой комплектации
            </p>
          </div>
          <div className=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
            <img src={star} alt="image" />
            <p className=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
              Гарантийное и постгарантийное обслуживание
            </p>
          </div>
          <div className=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
            <img src={line} alt="image" className="w-[62px] " />
            <p className=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
              Диагностика и проведение профилактических работ
            </p>
          </div>
        </div>

        <div className="flex gap-[10px] justify-center md:justify-end ">
          <BtnGG title={'Гарантийный случай'} />
          <BtnG title={'Замена товара'} />
        </div>
      </div>

      <div className=" container custom-margin">
        <div className="bg-[--pri] text-white  px-[20px] py-[40px] lg:px-[40px] rounded-[10px] border-[--border]  border grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-2 gap-[20px]">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-white ">Внимание!</p> 
          <div className=' custom-text flex flex-col gap-[20px] '>
            <p>
              Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её
              регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления
              документов, перечисленных в договоре.
            </p>
            <p>
              Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при
              условии предоставления документов, перечисленных в договоре и при наличии заявления с
              указанием причины возврата, оформленного надлежащим образом.
            </p>
          </div>
        </div>
      </div>

      <Map />
      <Footer />
    </>
  );
};

export default Grants;
