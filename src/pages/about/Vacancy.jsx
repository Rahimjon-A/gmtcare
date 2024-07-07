import { Link } from 'react-router-dom';
import Accordion from '../../ui/ExtraAccordion';
import Footer from '../../components/home/Footer';
import Mail from '../../components/home/Mail';
import Title from '../../ui/Title';
import { arxive, vacancy } from '../../library/content';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BtnG, BtnW } from '../../ui/Btn';

const Vacancy = () => {
  const itemsPerPage = 10;

  const renderAccodion = (currentItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] ">
      {currentItems.map((title, index) => (
        <Accordion key={index} title={title} show={false} />
      ))}
    </div>
  );
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
            Вакансии
          </span>
        </Link>
      </div>

      <div className=" container grid grid-cols-1 lg:grid-cols-2 mt-[40px] md:mt-[50px] lg:mt-[100px] gap-[30px] md:gap-[40px] lg:gap-[120px] custom-margin ">
        <div className="flex flex-col gap-[20px] ">
          <p className=" custom-title leading-[110%] ">Вакансии</p>

          <p className=" custom-text">
            В «Глобал Медикал Трейд» всегда есть место как для новичков, так и для состоявшихся
            экспертов. Тем, кто только начинает строить карьеру, мы предлагаем возможность получить
            ценные знания, а опытным специалистам — расширить компетенции.
          </p>
        </div>

        <div>
          <div className="mb-[20px] ">
            <Title text={'Актуальные вакансии'} />
          </div>
          <Accordion title={vacancy} show={false} />

          <div className="mb-[20px] mt-[50px] ">
            <Title text={'Архив вакансий'} />
          </div>
          <Accordion title={arxive} show={false} />
        </div>
      </div>

      <div className="container custom-margin">
        <div className="border border-[--border] rounded-[10px] overflow-hidden relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719840169404!5m2!1suz!2s"
            width="100%"
            height="450"
          ></iframe>
          <span className=" absolute top-[20px] left-[20px] bg-white ">
            <BtnW title={'г. Москва, ул. Московская, д. 35'} />{' '}
          </span>
          <span className=" absolute bottom-[20px] right-[20px] ">
            <BtnG title={'Построить маршрут'} />
          </span>
        </div>
      </div>

      <Mail />
      <Footer />
    </>
  );
};

export default Vacancy;
