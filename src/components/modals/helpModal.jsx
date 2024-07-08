import { useDispatch } from 'react-redux';
import { hideModal } from '../../reducers/gmt';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';

const HelpModal = () => {

  const dispatch = useDispatch();
  const handleSliderChange = (e) => {
    e.preventDefault();
    dispatch(hideModal('helpModal'));
  };

  return (
    <ModalCase modalKey="helpModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
            Вам нужна помощь?
          </p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('helpModal'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>
        <p className=' custom-text text-[--text] mb-[30px] lg:mb-[40px] '>Наши менеджеры всегда готовы помочь. Напишите нам сообщение</p>
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

export default HelpModal;
