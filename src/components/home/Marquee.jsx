import React from 'react'
import Marquee from 'react-fast-marquee';

const Customer = () => {
  return (
    <div className="bg-[#E5E2EE] py-[50px] lg:py-[100px] ">
      <div className="container flex justify-between flex-col sm:flex-row ">
        <div className="text-[18px] md:text-[20px] lg:text-[30px] mb-[50px] sm:mb-0 ">Наши клиенты</div>
        <div className="text-[28px] md:text-[34px] lg:text-[48px]  ">
          БОЛЕЕ <span className="bg-transparent text-[#088269]">5000</span>{" "}
          <br /> УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <Marquee>
        <div className='flex justify-between gap-6 mx-6 mt-16'>

          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="./img221.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>

          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="./img222.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="./img223.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="./img224.jpg" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="./img221.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Customer
