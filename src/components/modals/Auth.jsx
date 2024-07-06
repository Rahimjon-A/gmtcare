import React, { useState } from 'react';
import ModalCase from './ModalCase';
import { useDispatch } from 'react-redux';
import { hideModal, register } from '../../reducers/gmt';
import { IoCloseSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch register action with user data
    dispatch(register({ email, password }));
    // Optionally hide the modal after registration
    dispatch(hideModal('auth'));
    navigate('/profile');
  };

  return (
    <ModalCase modalKey="auth">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Регистрация</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('auth'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[25px] mb-[30px] ">
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="email"
              required
              placeholder="Ваш email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="pb-[11px] border-b border-[--border] outline-none"
              type="password"
              required
              placeholder="Пароль**"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-[12px] mb-[20px] w-full bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  "
          >
            Регистрация
          </button>

          <div className="flex gap-[10px] items-center md:items-start">
            <input type="checkbox" name="auth" id="auth" className=" accent-[--pri] " />
            <label htmlFor="auth" className="text-[12px] text-[--text] hidden md:block">
              Я соглашаюсь c обработкой персональных данных на условиях{' '}
              <span className="text-[--pri] ">Политики конфиденциальности.</span>
            </label>
            <label htmlFor="auth" className="text-[--text] md:hidden ">
              Запомнить
            </label>
          </div>
        </form>
      </div>

      <div className="bg-[#E5E4ED] py-[17px] flex justify-center rounded-b-[10px] ">
        <p className="text-[--text] ">
          Вы уже зарегистрированы? <span className="text-[--pri]">Войти</span>
        </p>
      </div>
    </ModalCase>
  );
};

export default Auth;
