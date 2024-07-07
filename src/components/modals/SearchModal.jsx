import { myData } from '../../library/myData';
import { Link } from 'react-router-dom';

const SearchModal = ({ input, handleClick }) => {
  const searchData = myData.filter((item) =>
    item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );

  return (
    <div
      className={` ${
        input ? 'block' : 'hidden'
      } bg-white absolute  top-[35px]  lg:right-[-20px] rounded-[10px] border border-[--border] w-full lg:w-[400px] max-h-[500px] overflow-y-scroll z-20 p-[15px] `}
    >
      <div className="text-[12px] text-[--text] border-b pb-[10px] mb-[10px]  ">Бренд</div>
      {searchData.length > 0 ? (
        <div className="flex flex-col gap-[15px] ">
          {searchData.map((item) => (
            <Link to={`/tovar/${item.id}`} onClick={handleClick}>
              <div className="flex  gap-[15px] items-center">
                <img src={item.img} alt="" className="w-[20px] h-[20px] rounded-[10px]" />
                <p className="text-[14px] ">{item.title} </p>
              </div>
            </Link>
          ))}
        </div>
      ) :  <p className='text-[16px] text-[--pri] font-medium '>Товар не найден :( </p> }
    </div>
  );
};

export default SearchModal;
