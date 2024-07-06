import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const { totalPrice, cards } = useSelector((state) => state.card);

  return (
    <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
      <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
        История заказов
      </p>

      <div>
        <div className="border border-[--border] flex flex-col bg-white rounded-[10px] py-[20px] lg:py-[25px]">
          <div className="border-b px-[20px] lg:px-[25px] pb-[25px] ">
            <p className=" custom-text font-medium mb-[10px] ">
              Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.{' '}
            </p>
            <div className="text-[12px] lg:text-[14px] font-semibold flex gap-[10px] items-center  ">
              <span className="text-[--text] ">Статус:</span>
              <span className="bg-[#FFE095] text-[#855E00] border border-[#855E00] rounded-full px-[10px] py-[3px] ">
                В работе
              </span>
            </div>
          </div>

          <div className="p-[25px] flex flex-col gap-[25px] ">
            {cards.map((card) => {
              const itemTotal = card.amount * card.price;
              return (
                <Link to={`/tovar/${card.id}`}>
                  <div className="flex items-center ">
                    <div className="w-[64px] h-[64px] overflow-hidden ">
                      <img src={card.img} alt="image" className="w-full h-full" />
                    </div>

                    <div className="flex flex-col md:flex-row  w-full gap-[10px] pl-[30px] lg:pl-[40px]">
                      <p className="custom-text font-semibold  ">{card.title}</p>

                      <div className="flex  md:ml-auto gap-[15px] md:gap-[80px]  ">
                        <p className="text-[--text] custom-text font-medium text-end ">
                          {card.amount}
                        </p>
                        <p className=" custom-text font-medium">{itemTotal} руб.</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-end text-[16px] lg:text-[18px] font-semibold mt-[30px] px-[20px] lg:px-[25px]  ">
            <span>Товаров на сумму:</span>
            <span className="ml-[15px] md:ml-[55px]"> {totalPrice} </span> руб.
          </div>
        </div>

        <div className="bg-white mt-[10px] p-[20px] lg:p-[25px] border border-[--border] rounded-[10px] ">
          <p className=" custom-text font-medium mb-[10px] ">
            Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.{' '}
          </p>

          <div className="text-[12px] lg:text-[14px] font-semibold flex gap-[10px] items-center  ">
            <span className="text-[--text] ">Статус:</span>
            <span className="bg-[#E1EFE6] text-[--pri] border rounded-full px-[10px] py-[3px] ">
              Доставлено
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
