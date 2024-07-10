import { useDispatch } from 'react-redux';
import { hideModal } from '../../reducers/gmt';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';

const PersonalInfo = ({ handleInfo, handleInputChange, personalData }) => {
  const dispatch = useDispatch();
  return (
    <ModalCase modalKey="personalInfo">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Регистрация</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('personalInfo'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>

        <form onSubmit={handleInfo}>
          <div className="flex flex-col gap-[25px] mb-[30px] lg:mb-[40px] ">
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              required
              placeholder="Имя*"
              id="firstname"
              value={personalData.firstname}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              required
              placeholder="Фамилия*"
              id="lastname"
              value={personalData.lastname}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-[25px] mb-[30px] lg:mb-[40px] ">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
              Социальные сети
            </p>
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Вконтакте"
              id="vk"
              value={personalData.vk}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Instagram"
              id="instagram"
              value={personalData.instagram}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Facebook"
              id="facebook"
              value={personalData.facebook}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Одноклассники"
              id="odno"
              value={personalData.odno}
              onChange={handleInputChange}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="text"
              placeholder="Твиттер"
              id="twitter"
              value={personalData.twitter}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-[15px] items-start :lg:items-center">
            <button
              type="submit"
              className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  "
            >
              Добавить
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

export default PersonalInfo;
