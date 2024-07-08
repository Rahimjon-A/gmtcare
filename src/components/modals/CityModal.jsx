import { useDispatch } from 'react-redux';
import { hideModal } from '../../reducers/gmt';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { cityList } from '../../library/content';
import { useState } from 'react';

const CityModal = ({ setCity }) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const [search, setSearch] = useState(cityList);
  const [inputValue, setInputValue] = useState('');

  const handleCity = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filteredCities = cityList.filter((city) =>
      city.city.toLowerCase().includes(value)
    );
    setSearch(filteredCities);
  };

  return (
    <ModalCase modalKey="cityModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">Запросить цену</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('cityModal'))}
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>

        <div className="flex w-full bg-[#d5d1e1] border rounded-full relative mb-[26px]">
          <input
            type="text"
            id="city"
            className="flex-1 outline-none px-[15px] py-[10px] text-[14px] rounded-full"
            placeholder="Поиск населенного пункта"
            value={inputValue}
            onChange={handleCity}
          />
          <label
            htmlFor="city"
            className="bg-[#d5d1e1] rounded-full px-2 md:px-4 flex items-center"
          >
            <IoIosSearch className="text-[--text] text-[18px]"></IoIosSearch>
          </label>
        </div>

        <div className="mb-[40px] lg:mb-[50px] grid grid-cols-2 md:grid-cols-3 gap-2 justify-between overflow-y-scroll max-h-[305px] md:max-h-[318px] lg:max-h-[450px] ">
          {search.slice(0, expand ? search.length : 31).map((city) => (
            <p
              onClick={() => {
                setCity(city.city);
                dispatch(hideModal('cityModal'));
              }}
              key={city.id}
              className="text-[12px] lg:text-[14px] cursor-pointer hover:text-[--pri] hover:underline"
            >
              {city.city}
            </p>
          ))}
        </div>

        <div className="flex items-start">
          <button onClick={() => setExpand((prev) => !prev)} className="btnG">
            {expand ? 'меньше' : 'Все города'}
          </button>
        </div>
      </div>
    </ModalCase>
  );
};

export default CityModal;
