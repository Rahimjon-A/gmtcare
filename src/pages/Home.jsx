import Accordion from '../components/home/Accordion';
import Brends from '../components/home/Brends';
import Footer from '../components/home/Footer';
import Mail from '../components/home/Mail';
import Map from '../components/home/Map';
import Customer from '../components/home/Marquee';
import News from '../components/home/News';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Slider from '../components/home/Slider';
import CityModal from '../components/modals/CityModal';
import SliderModal from '../components/modals/SliderModal';

const Home = () => {
  return (
    <>
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Customer />
      <Brends />
      <Accordion text={'Информация о компании'} />
      <News />
      <Map />
      <Mail />
      <Footer />
      <SliderModal />
    </>
  );
};

export default Home;
