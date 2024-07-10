import FooterSlider from '../../ui/FooterSlider';
import mastercard from '../../../public/icons/mastercard.svg';
import visa from '../../../public/icons/visa.svg';
import mir from '../../../public/icons/mir.svg';
import vk from '../../../public/icons/vk.svg';
import telgrem from '../../../public/icons/telegram.svg';
import whatsapp from '../../../public/icons/whatsapp.svg';
import logo from '../../../public/icons/footer.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[--pri] ">
      {/* top */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] container gap-[40px] lg:gap-[120px] pt-[15px] sm:pt-[40px] pb-[30px] lg:pb-[47px] ">
        <div className=" hidden sm:block">
          <p className="text-[#F8F7F3] text-[14px] pb-[15px] font-semibold leading-[normal] border-b border-[#F8F7F3] ">
            Покупателям
          </p>
          <div className="pt-[15px] text-white flex justify-between ">
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/about'}>О компании</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/about/serticats'}>Сертификаты</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/about/vacancy'}>Вакансии</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/grants'}>Гарантии</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/services'}>Услуги</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/discount'}>Акции</Link>
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/dostavka'}> Доставка</Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/oplata'}>Оплата</Link>
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/faq'}>FAQ</Link>{' '}
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/about/comments'}>Отзывы</Link>
              </li>
              <li className="text-[12px] lg:text-[14px] ">
                <Link to={'/blog'}>Блог</Link>{' '}
              </li>
            </ul>
          </div>
        </div>

        <div className=" hidden sm:block">
          <p className="text-[#F8F7F3] text-[14px] pb-[15px] font-semibold leading-[normal] border-b border-[#F8F7F3] ">
            Каталог
          </p>
          <div className="pt-[15px] text-white grid grid-cols-2 lg:grid-cols-3 gap-1  justify-between ">
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] lg:text-[14px] ">Реанимация</li>
              <li className="text-[12px] lg:text-[14px] ">Хирургия</li>
              <li className="text-[12px] lg:text-[14px] ">Офтальмология</li>
              <li className="text-[12px] lg:text-[14px] ">Лабораторная диагностика</li>
              <li className="text-[12px] lg:text-[14px] ">Акушерство и Гинекология</li>
              <li className="text-[12px] lg:text-[14px] ">Гистология</li>
              <li className="text-[12px] lg:text-[14px] ">Косметология</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="text-[12px] lg:text-[14px] ">Орториноларингология</li>
              <li className="text-[12px] lg:text-[14px] ">Рентгенология и томография</li>
              <li className="text-[12px] lg:text-[14px] ">Стрерилизация</li>
              <li className="text-[12px] lg:text-[14px] ">Физиотерапия и реабилитация</li>
              <li className="text-[12px] lg:text-[14px] ">Функциональная диагностика</li>
              <li className="text-[12px] lg:text-[14px] ">Эндоскопия</li>
            </ul>

            <ul className="flex md:justify-start lg:justify-end ">
              <ul className=" flex flex-col gap-2">
                <li className="text-[12px] lg:text-[14px] ">Новинки</li>
                <li className="text-[12px] lg:text-[14px] ">Распродажи</li>
                <li className="text-[12px] lg:text-[14px] ">
                  {' '}
                  <Link to={'/kobinet'}>Кабинеты под ключ</Link>{' '}
                </li>
                <li className="text-[12px] lg:text-[14px] ">Скачать каталог</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className=" hidden sm:block">
          <p className="text-[#F8F7F3] text-[14px] pb-[15px] font-semibold leading-[normal] border-b border-[#F8F7F3] ">
            Контакты
          </p>
          <div className="pt-[15px] text-white flex flex-col justify-between ">
            <p className="text-[12px] lg:text-[14px] font-semibold ">Адрес:</p>
            <p className="text-[12px] lg:text-[14px] mb-[20px] ">
              г. Москва, ул. Московская, д. 35{' '}
            </p>
            <p className="text-[12px] lg:text-[14px] mb-[20px] ">Карта проезда</p>
            <p className="text-[12px] lg:text-[14px] ">График работы:</p>
            <p className="text-[12px] lg:text-[14px] mb-[20px] ">
              Пн-Пт с 09:00-19:00, Сб-Вс - выходной
            </p>
            <p className="text-[12px] lg:text-[14px] ">
              +7 000-000-00-00 <br />
              +7 495-000-00-00 <br />
              8 800-000-00-00 <br />
              info@mail.ru
            </p>
          </div>
        </div>

        <div className="block sm:hidden ">
          <div className="mb-[30px] ">
            <img src={logo} alt="" />
            <span className="text-[12px] text-white ">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</span>
          </div>
          <FooterSlider />
        </div>
      </div>

      {/* center */}
      <div className="container grid grid-cols-1 md:grid-cols-5 border-t pt-[10px] ">
        <div className="hidden md:block ">
          <img src="./icons/footer.svg" alt="" />
          <span className="text-[10px] text-white ">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</span>
        </div>

        <div>
          <p className="text-[12px] text-white mb-1 font-semibold ">Мы в соцсетях</p>
          <div className="flex gap-[10px] mb-[30px] ">
            <img src={vk} alt="" className="w-[24px] h-[24px]  " />
            <img src={telgrem} alt="" className="w-[24px] h-[24px]  " />
            <img src={whatsapp} alt="" className="w-[24px] h-[24px]  " />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around md:col-[span_2]">
          <div className="mb-[30px] ">
            <p className="text-[12px] mb-1 text-white ">Партнерская программа</p>
            <p className="text-[12px] mb-1 text-white ">Оптовые продажи </p>
            <p className="text-[12px] mb-1 text-white ">Реквизиты</p>
          </div>

          <div className="mb-[30px] ">
            <p className="text-[12px] mb-1 text-white ">Политика конфиденциальности</p>
            <p className="text-[12px] mb-1 text-white ">Условия соглашения </p>
            <p className="text-[12px] mb-1 text-white ">Карта сайта</p>
          </div>
        </div>

        <div className="mb-[50px] ">
          <p className="text-[12px] text-white mb-1 ">Способы оплаты</p>
          <div className="flex items-center gap-4 flex-wrap">
            <img src={mastercard} alt="image" />
            <img src={visa} alt="image" />
            <img src={mir} alt="image" />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="container grid grid-cols-1 gap-[15px] md:gap-[10px] md:grid-cols-[1fr_4fr] pb-[10px] ">
        <p className="text-white text-[12px] ">© 2022 Медоборудование Все права защищены</p>
        <p className="text-white text-[12px] opacity-60 ">
          Информация на данном сайте носит справочный характер и не является публичной офертой,
          определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации
        </p>
      </div>
    </div>
  );
};

export default Footer;
