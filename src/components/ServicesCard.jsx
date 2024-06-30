import { BtnGG } from '../ui/Btn';

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
      <div className=" order-2  lg:order-1 h-full ">
        <div className="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
          <div>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
              {service.title}
            </p>
            <p className="text-[12px] text-[--text] ">Описание услуги</p>
            <p className=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">{service.content} </p>
          </div>
          <div className="mt-auto  ">
            <BtnGG title={'Заказать'} />
          </div>
        </div>
      </div>

      <div className=" order-1 overflow-hidden  ">
        <img src={service.img} alt="image" className="w-full h-[245px] lg:h-full object-cover  " />
      </div>
    </div>
  );
};

export default ServicesCard;
