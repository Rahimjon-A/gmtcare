import Accordion from "../components/home/Accordion"
import Brends from "../components/home/Brends"
import Customer from "../components/home/Marquee"
import Section1 from "../components/home/Section1"
import Section2 from "../components/home/Section2"
import Section3 from "../components/home/Section3"
import Section4 from "../components/home/Section4"
import Slider from "../components/home/Slider"


const Home = () => {
  return (
    <>
    <Slider/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Customer/>
    <Brends/>
    <Accordion/>
    </>
  )
}

export default Home