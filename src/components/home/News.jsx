import Title from '../../ui/Title';
import { news } from '../../library/content';
import { BtnG } from '../../ui/Btn';
import NewsSlider from '../../ui/NewsSlider';
import { Link } from 'react-router-dom';

const News = () => {
  
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden pb-[60px] md:pb-[120px] lg:pb-[150px] ">
      <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">
        <div className=' lg:w-[50%] '>
          <Title text={'Новости компании'} />
        </div>
        <Link to={"/blog/news"} className=' hidden sm:block lg:hidden '>
        <BtnG title={"Все новости"}/>
        </Link>
      </div>
      <div className="overflow-hidden">
        <NewsSlider data={news} />
      </div>
    </div>
  );
};

export default News;