import Title from '../../ui/Title';
import lightning from "../../../public/lightning.svg";
import star from "../../../public/star.svg";
import line from "../../../public/line.svg";
import seven from "../../../public/7.svg";

const Section3 = () => {
  return (
    
    <div className='container mb-[60px] md:mb-[150px] '>
      <div className='mb-[25px] md:mb-[30px] lg:mb-[40px] '>
      <Title text={"Почему выбирают нас?"}/>
      </div>

      <div className='grid grid-cols-2 gap-[10px] md:grid-cols-4 '>
        <div className='border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] '>
              <img src={lightning} alt="image" />
              <p className='text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]'>Быстрая  доставка</p>
        </div>
        <div className='border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] '>
              <img src={star} alt="image" />
              <p className='text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]'>Быстрая  доставка</p>
        </div>
        <div className='border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] '>
              <img src={line} alt="image" />
              <p className='text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]'>Быстрая  доставка</p>
        </div>
        <div className='border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] '>
              <img src={seven} alt="image" />
              <p className='text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]'>Быстрая  доставка</p>
        </div>

      </div>
    </div>
  )
}

export default Section3