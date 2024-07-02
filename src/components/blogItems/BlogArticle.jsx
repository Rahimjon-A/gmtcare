import React from 'react';
import { BtnGG } from '../../ui/Btn';

const BlogArticle = ({ blog }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr] border border-[--border] rounded-[10px] ">
      <div className='rounded-[10px] overflow-hidden lg:h-[304px] '>
        <img src={blog.img} alt="" className='w-full h-[175px] lg:h-full object-cover ' />
      </div>
      <div className="flex flex-col justify-between p-[15px] lg:p-[30px] gap-[30px] md:gap-[40px] ">
        <div>
          <p className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold '>Что такое инфузомат (инфузионный насос)</p>
          <p className='text-[10px] md:text-[12px] mb-[10px] md:mb-[15px] lg:mb-[25px]  '>14.03.2023</p>
          <p className=' custom-text text-[--text] '>{blog.content} </p>
        </div>
        <div>
          <BtnGG title={'Подробнее'} />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
