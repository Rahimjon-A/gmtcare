import Title from '../../ui/Title';
import BrendsSlider from '../../ui/BrendsSlider';
import { news } from '../../library/content';
import { BtnG } from '../../ui/Btn';
import NewsSlider from '../../ui/NewsSlider';

const News = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px] ">
      <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">

        <div className=' lg:w-[50%] '>
          <Title text={'Новости компании'} />
        </div>
        <div className=' hidden sm:block lg:hidden '>
        <BtnG title={"Все новости"}/>
        </div>
      </div>

      <div className="overflow-hidden">
        <NewsSlider data={news} />
      </div>
    </div>
  );
};

export default News;