import Footer from '../components/home/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BtnG } from '../ui/Btn';
import History from '../components/user/History';
import ProfileHeader from '../components/ProfileHeader';
import Information from '../components/Information';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/gmt';
import { useState } from 'react';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [preview, setPreview] = useState(localStorage.getItem('profileImage') || '');
  const [localPreview, setLocalPreview] = useState(preview);

  const handleRemve = () => {
    setPreview(null);
    localStorage.removeItem('profileImage');
  };

  const logOut = () => {
    dispatch(logout());
    handleRemve();
    navigate('/');
  };

  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Личный кабинет
          </span>
        </Link>
      </div>

      <ProfileHeader
        logOut={logOut}
        preview={preview}
        setPreview={setPreview}
        localPreview={localPreview}
        setLocalPreview={setLocalPreview}
        handleRemve={handleRemve}
      />

      <Information />
      <History />
      <div className=" container custom-margin grid grid-cols-1  md:grid-cols-[1fr_3fr] ">
        <p className=" font-semibold text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] pr-[20px] ">
          Настройки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className=" custom-text font-semibold mb-[20px] ">Показывать в профиле:</p>
            <form className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="name" id="" className=" accent-[--pri]" />
                Имя
              </label>

              <label
                htmlFor="surname"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="surname" id="" className=" accent-[--pri]" />
                Фамилия
              </label>

              <label
                htmlFor="phone"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="phone" id="" className=" accent-[--pri]" />
                Телефон
              </label>

              <label
                htmlFor="email"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="email" id="" className=" accent-[--pri]" />
                Email
              </label>
            </form>
          </div>

          <div>
            <p className=" custom-text font-semibold mb-[20px] mt-[20px] md:mt-[0px]  ">
              Получать рассылку по темам:
            </p>
            <form className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="name" id="" className=" accent-[--pri]" />
                Скидки и акции
              </label>

              <label
                htmlFor="surname"
                className="flex gap-[10px] lg:gap-[20px] text-[12px] md:text-[14px] font-medium "
              >
                <input type="checkbox" name="surname" id="" className=" accent-[--pri]" />
                Снизилась цена на избранное
              </label>
            </form>
          </div>
        </div>
        <div></div>
        <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] ">
          <span onClick={logOut}>
            <BtnG title={'Выйти'} />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
