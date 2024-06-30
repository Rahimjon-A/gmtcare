import React from 'react';
import Footer from '../../components/home/Footer';
import Map from '../../components/home/Map';
import Brends from '../../components/home/Brends';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Section2 from '../../components/home/Section2';
import Section4 from '../../components/home/Section4';
import Title from '../../ui/Title';
import blog1 from '../../../public/blog1.png';
import blog2 from '../../../public/blog2.png';

const Blog = () => {
  return (
    <>
      <div className=" container flex pt-[20px] gap-2 ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link to={'/blog'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Блог <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Информационная статья
          </span>
        </Link>
      </div>

      <div className=" container">
        <div className="py-[20px] md:py-[25px] lg:py-[35px] bg-white rounded-[10px] border-[--border] arr border mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin ">
          <div className="px-[20px] md:px-[25px] lg:px-[35px]">
            <p className="custom-title mb-[15px] md:mb-[20px] leading-[105%] ">Информационная статья</p>
            <p className="text-[--text] text-[12px] mb-[27px] ">Автор: Иванов Р.</p>

            <div className="mb-[50px] lg:mb-[60px] ">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                Содержание:{' '}
              </p>
              <p className="text-[--text] mb-1 text-[12px] mt-[12px] ">
                1. Новая модель организационной деятельности
              </p>
              <p className="text-[--text] mb-1 text-[12px] ">
                2. Мы вынуждены отталкиваться от того, что курс
              </p>
              <p className="text-[--text] mb-1 text-[12px] ">
                3. Новая модель организационной деятельности
              </p>
              <p className="text-[--text] mb-1 text-[12px] ">
                4. Мы вынуждены отталкиваться от того, что курс
              </p>
            </div>

            <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
              <Title text={'Новая модель организационной деятельности'} />
              <p className=" custom-text mt-[15px] lg:mt-[20px] ">
                Равным образом, внедрение современных методик однозначно фиксирует необходимость
                поэтапного и последовательного развития общества. В частности, постоянное
                информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
                на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
                Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
                активности создаёт предпосылки для соответствующих условий активизации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mb-[50px] lg:mb-[60px]  ">
              <div className="w-full">
                <img src={blog1} alt="image" className=" w-full" />
              </div>
              <div className="w-full">
                <img src={blog2} alt="image" className=" w-full" />
              </div>
            </div>

            <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
              <Title text={'Новая модель организационной деятельности'} />
              <p className=" custom-text mt-[15px] lg:mt-[20px] ">
                Равным образом, внедрение современных методик однозначно фиксирует необходимость
                поэтапного и последовательного развития общества. В частности, постоянное
                информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
                на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
                Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
                активности создаёт предпосылки для соответствующих условий активизации.
              </p>
            </div>
          </div>

          <div className=" bg-[#E1EFE6] py-[20px] lg:py-[30px] px-[20px] md:px-[25px] lg:px-[35px] mb-[50px] lg:mb-[60px] ">
            <p className="w-full md:w-[90%] lg:w-4/5 ">
              Равным образом, внедрение современных методик однозначно фиксирует необходимость
              поэтапного и последовательного развития общества. В частности, постоянное
              информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
              на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
              Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
              активности создаёт предпосылки для соответствующих условий активизации.
            </p>
          </div>

          <div className="px-[20px] md:px-[25px] lg:px-[35px]">
            <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
              <Title text={'Новая модель организационной деятельности'} />
              <p className=" custom-text mt-[15px] lg:mt-[20px] ">
                Равным образом, внедрение современных методик однозначно фиксирует необходимость
                поэтапного и последовательного развития общества. В частности, постоянное
                информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
                на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
                Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
                активности создаёт предпосылки для соответствующих условий активизации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mb-[50px] lg:mb-[60px]  ">
              <div className="w-full">
                <img src={blog1} alt="image" className=" w-full" />
              </div>
              <div className="w-full">
                <img src={blog2} alt="image" className=" w-full" />
              </div>
            </div>

            <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
              <Title text={'Новая модель организационной деятельности'} />
              <p className=" custom-text mt-[15px] lg:mt-[20px] ">
                Равным образом, внедрение современных методик однозначно фиксирует необходимость
                поэтапного и последовательного развития общества. В частности, постоянное
                информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
                на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
                Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
                активности создаёт предпосылки для соответствующих условий активизации.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section4 text="Рекомендуемые товары" sort={false} />
      <Section2 />
      <Brends />
      <Map />
      <Footer />
    </>
  );
};

export default Blog;
