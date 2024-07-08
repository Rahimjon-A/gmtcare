import { IoCloseSharp } from 'react-icons/io5';
import ModalCase from './ModalCase';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../reducers/gmt';

const SliderModal = () => {
  const dispatch = useDispatch();

  const handleSliderChange = (e) => {
    e.preventDefault();
    dispatch(hideModal('sliderModal'));
  };
  return (
    <ModalCase modalKey="sliderModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Запросить цену</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('sliderModal'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>
        <form onSubmit={handleSliderChange}>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[15px]">
              <input
                className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
                type="text"
                required
                placeholder="Ваше имя**"
              />
              <input
                className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
                type="number"
                required
                placeholder="Ваш телефон*"
              />
            </div>

            <input
              className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
              type="email"
              required
              placeholder="Ваш email*"
            />
            <input
              className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
              type="text"
              placeholder="Название вашей организации*"
            />
            <textarea
              className="h-[100px] resize-none pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
              placeholder="Ваше сообщение"
            ></textarea>
          </div>

          <div className="flex flex-col lg:flex-row gap-[15px] items-start :lg:items-center">
            <button
              type="submit"
              className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  "
            >
              Отправить
            </button>
            <p className="text-[12px] ">
              Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на условиях
              <span className="text-[--pri] "> Политики конфиденциальности. </span>
            </p>
          </div>
        </form>
      </div>
    </ModalCase>
  );
};

export default SliderModal;
