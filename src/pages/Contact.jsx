import React from 'react';
import Footer from '../components/home/Footer';
import { BtnG, BtnW } from '../ui/Btn';
import ContactForm from '../components/home/Contact';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import vk from '../../public/vkc.svg';
import whatsapp from '../../public/whatsappc.svg';
import telegram from '../../public/telegramc.svg';

const Contact = () => {
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
            Контакты
          </span>
        </Link>
      </div>

      <div className=" container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px]  ">
        <p className=" custom-title">Контакты</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px] mt-[20px] md:mt-[30px] lg:mt-[40px] ">
          <div className="border border-[--border] rounded-[10px] p-[20px] md:p-[30px] lg:p-[40px] bg-white">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-[25px] ">
              ООО Глобал Медикал Трейд
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[16px] flex-wrap mb-[30px] ">
              <div>
                <span className="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <CiLocationOn />
                  Юридический адрес:
                </span>
                <p className=" custom-text pl-[15px] ">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>

              <div>
                <span className="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <CiLocationOn />
                  Фактический адрес:
                </span>
                <p className=" custom-text pl-[15px] ">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>

              <div>
                <span className="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <CiLocationOn />
                  Режим работы:
                </span>
                <p className=" custom-text pl-[15px] ">
                  Пн-Пт с 09:00-19:00 <br />
                  Сб-Вс - выходной
                </p>
              </div>
            </div>

            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-[25px] ">
              Звоните. Звонки по России бесплатны:
            </p>

            <div className="mb-[15px] ">
              <span className="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                <BsTelephone />
                Телефоны:
              </span>
              <span className=" custom-text pl-[15px] flex gap-3 items-center ">
                <span>8-800-000-00-00</span>
                <span>+7-000-000-00-00</span>
                <span>+7-495-000-00-00</span>
              </span>
            </div>

            <div className="mb-[30px] ">
              <span className="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                <CiMail className="text-[14px] " />
                Пишите:
              </span>
              <p className=" custom-text pl-[15px] ">info@mail.ru</p>
            </div>

            <div className="flex items-center justify-between w-[90%] text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-[25px] ">
              <span>Реквизиты: </span>
              <span>Мы в соцсетях</span>
            </div>

            <div className="flex flex-col md:flex-row  gap-[30px]  w-[90%]">
              <span>
                <span className="text-[--text] custom-text block leading-3 ">ИНН</span>
                <span className=" custom-text ">9717039181</span>
              </span>

              <span>
                <span className="text-[--text] custom-text block leading-3 ">ОГРН</span>
                <span className=" custom-text ">1167746796986</span>
              </span>

              <div className="flex ml-auto gap-[10px] ">
                <img src={vk} alt="" className=" text-white " />
                <img src={telegram} alt="" className=" text-white " />
                <img src={whatsapp} alt="" className=" text-white " />
              </div>
            </div>
          </div>

          <ContactForm title="Бесплатная консультация" />
        </div>

        <div className="border border-[--border] rounded-[10px] overflow-hidden relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719840169404!5m2!1suz!2s"
            width="100%"
            height="450"
          ></iframe>
          <span className=" absolute top-[20px] left-[20px] bg-white ">
            {' '}
            <BtnW title={'г. Москва, ул. Московская, д. 35'} />{' '}
          </span>
          <span className=" absolute bottom-[20px] right-[20px] ">
            {' '}
            <BtnG title={'Построить маршрут'} />{' '}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
