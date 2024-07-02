import aboutMonitor from '../../public/aboutMonitor.png';
import aboutImg from '../../public/aboutMain.png';
import dr1 from '../../public/dr1.png';
import dr2 from '../../public/dr2.png';
import dr3 from '../../public/dr3.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Sertificat from '../../ui/Sertificat';
import Section3 from '../../components/home/Section3';
import Brends from '../../components/home/Brends';
import Map from '../../components/home/Map';
import Footer from '../../components/home/Footer';
import Title from '../../ui/Title';
import Customer from '../../components/home/Marquee';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const About = () => {
  const [mainImg, setMainImg] = useState(1);

  const handleImg = (img) => {
    if (mainImg == 1) {
      return dr1;
    } else if (mainImg == 2) {
      return dr2;
    } else if (mainImg == 3) {
      return dr3;
    }
  };

  return (
    
    <div>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
          О компании
          </span>
        </Link>
      </div>

      <div className=" container mb-[60px] md:mb-[120px] lg:mb-[150px] mt-[15px] md:mt-[25px] lg:mt-[40px] ">
        <div className="mb-[25px] lg:mb-10">
          <img src={aboutMonitor} alt="" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <p className="text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[110%] text-[--second] mb-[15px] md:mb-[20px] ">
            Глобал медикал трейд
          </p>

          <div>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-[--second] mb-4 ">
              Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
              Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
              в различных направлениях, от установок компьютерной томографии до ультразвуковых
              сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
              и лечении заболеваний также стал серьёзным испытанием для большинства больниц
              и частных клиник.
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-[--second] ">
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам
              всю необходимую помощь в деле поставок медицинского оборудования. Наш каталог включает
              передовое оборудование от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>

      <div className=" container mb-[60px] md:mb-[120px] lg:mb-[150px] grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <Title text={'Цифры и факты'} />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[50%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
            Мы работаем на результат и продаём только качественную продукцию
          </p>
        </div>

        <div className="flex flex-col gap-[20px] ">
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              7 лет
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">на рынке</p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              964+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              оригинальной продукции со всего мира
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              23+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              международных сертификатов качества
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center">
            <p className="text-[28px] md:text-[34px] text-[--pri] lg:text-[48px] font-medium leading-[110%]">
              2452+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[--second] ">
              товаров всегда в наличии
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[--pri] mb-[60px] md:mb-[120px] lg:mb-[150px] ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 py-[50px] lg:py-[80px] mr-[120px]  ">
          <img src={aboutImg} alt="image" className=" pb-[25px] lg:pr-[120px]  " />

          <div>
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-white pb-[10px] md:pb-[20px] lg:pb-[25px] ">
              Наши партнёры
            </p>
            <p className="custom-text lg:text-[16px] text-white ">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного
              оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество,
              добиться лучших цен для государственных учреждений здравоохранения, медицинских
              центров, лабораторий, а также ветеринарных клиник и кабинетов. Купить нужную
              вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках
              бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые
              предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы
              предоставить системы в рассрочку на выгодных условиях.
            </p>
          </div>
        </div>
      </div>

      <div className=" container grid grid-cols-1 lg:grid-cols-2 mb-[60px] md:mb-[120px] lg:mb-[150px]  ">
        <div className="mb-[30px] md:mb-[40px]">
          <div className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[90%] xl:w-[70%] ">
            <Title text={'Опытные сотрудники из производственных компаний'} />
          </div>
          <p className="custom-text custom-space md:w-[80%] ">
            Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар
            пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов
            в новейшие клиники Минобороны в различных регионах страны.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[10px] ">
          <div className="border border-[--border] rounded-[10px] overflow-hidden ">
            <div className="w-full h-[261px] border-b bg-[#d6d7d9] ">
              <img src={handleImg()} alt="image" className="w-full h-full object-contain" />
            </div>
            <div className="p-[15px] md:p-[20px]  ">
              <p className="custom-text font-medium leading-[140%]">
                {mainImg == 1
                  ? 'Константин Константинопольский'
                  : mainImg == 2
                  ? 'НМИЦ онкологии Блохина'
                  : 'Лабораторная диагностика'}
              </p>
              <p className="text-3 lg:text-[14px] text-[--text] ">Основатель компании</p>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-[10px] ">
            <img
              src={mainImg == 1 ? dr2 : mainImg == 2 ? dr1 : dr1}
              alt="image"
              className="h-[178px] object-cover rounded-[10px] "
            />
            <img
              src={mainImg == 1 ? dr3 : mainImg == 2 ? dr3 : dr2}
              alt="image"
              className="h-[178px] "
            />
          </div>

          <div className="hidden md:flex gap-4 items-center mt-[30px] ">
            <button
              onClick={() => setMainImg((prev) => (prev > 1 ? prev - 1 : 3))}
              className="bg-[#F8F7F3] hover:border-[--pri] duration-200 focus:bg-[#e1efe6] focus:border-[--pri] transition-all rounded-full border border-[--border] p-3"
            >
              <FaArrowLeft className="w-[17px] h-[17px]" />
            </button>

            <button
              onClick={() => setMainImg((prev) => (prev < 3 ? prev + 1 : 1))}
              className="bg-[#F8F7F3] hover:border-[--pri] duration-200 focus:bg-[#e1efe6] focus:border-[--pri] transition-all rounded-full border border-[--border] p-3"
            >
              <FaArrowRight className="w-[17px] h-[17px]" />
            </button>
          </div>
        </div>
      </div>

      <Customer />
      <Section3 />
      <Brends />
      <Sertificat />
      <Map />
      <Footer />
    </div>
  );
};

export default About;
