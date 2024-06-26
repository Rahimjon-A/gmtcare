import Title from '../../ui/Title';
import BrendsSlider from '../../ui/BrendsSlider';
import { brend } from '../../library/content';
import { BtnG } from '../../ui/Btn';

const Brends = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px] ">
      <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">

        <div className=''>
          <Title text={'Бренды'} />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%] mt-[10px] lg:mt-[25px] ">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className=' hidden sm:block lg:hidden '>
        <BtnG title={"Сертификаты"}/>
        </div>
      </div>

      <div className="overflow-hidden">
        <BrendsSlider data={brend} />
      </div>
    </div>
  );
};

export default Brends;
