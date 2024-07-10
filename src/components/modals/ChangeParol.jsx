import { IoCloseSharp } from 'react-icons/io5';
import ModalCase from './ModalCase';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, updateUser } from '../../reducers/gmt';
import { useState } from 'react';

const ChangeParol = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.gmt);
  const [password, setPassword] = useState('');
  const [newParol, setNewParol] = useState('');
  const [confirmParol, setConfirmParol] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    const initialParol = user.password;
    if (initialParol === password) {
      if (newParol === confirmParol) {
        dispatch(updateUser({ password: newParol, email: user?.email }));
        dispatch(hideModal('changeParol'));
        setError('');
      } else {
        setError('New and Confirm password must be the same');
      }
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <ModalCase modalKey="changeParol">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Изменить Email</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('changeParol'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>
        <form onSubmit={handleChangePassword}>
          <input
            className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
            type="text"
            required
            placeholder="Текущий пароль*"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
            type="text"
            required
            placeholder="Новый пароль*"
            onChange={(e) => setNewParol(e.target.value)}
          />
          <input
            className="pb-[11px] mb-[30px] w-full border-b border-[--border] outline-none"
            type="text"
            required
            placeholder="Повторите новый пароль*"
            onChange={(e) => setConfirmParol(e.target.value)}
          />
          <div className="text-red-500 text-[12px] md:text-[14px] w-full text-center mb-1 ">
            {' '}
            {error}{' '}
          </div>
          <button className="btnG w-full">Сохранить</button>
        </form>
      </div>
    </ModalCase>
  );
};

export default ChangeParol;
