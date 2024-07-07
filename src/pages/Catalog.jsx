import { Link } from 'react-router-dom';
import CatalogSection from '../components/CatalogSection';
import CatalogTitle from '../components/CatalogTitle';
import Accordion from '../components/home/Accordion';
import Brends from '../components/home/Brends';
import Footer from '../components/home/Footer';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import News from '../components/home/News';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Catalog = () => {
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
          Каталог
          </span>
        </Link>
      </div>

      <CatalogTitle />
      <CatalogSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Brends />
      <News />
      <Accordion />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Catalog;
