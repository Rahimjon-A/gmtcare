import CatalogSection from "../components/CatalogSection"
import CatalogTitle from "../components/CatalogTitle"
import Accordion from "../components/home/Accordion"
import Brends from "../components/home/Brends"
import Footer from "../components/home/Footer"
import Mail from "../components/home/Mail"
import Map from "../components/home/Map"
import Customer from "../components/home/Marquee"
import News from "../components/home/News"
import Section1 from "../components/home/Section1"
import Section2 from "../components/home/Section2"
import Section3 from "../components/home/Section3"
import Section4 from "../components/home/Section4"


const Catalog = () => {
  return (
    <>
    <CatalogTitle/>
    <CatalogSection/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Brends/>
    <News/>
    <Accordion/>
    <Map/>
    <Mail/>
    <Footer/>
    </>
  )
}

export default Catalog