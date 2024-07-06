import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ModalCase = ({ children, modalKey }) => {
  const modal = useSelector((state) => state.gmt[modalKey]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (modal) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 500);
    }
  }, [modal]);

  return (
    <div
      className={`${
        modal ? 'flex' : 'hidden'
      } bg-[#000000b3] fixed z-50 top-0 left-0 w-full h-full duration-300 justify-center items-center`}
    >
      <div
        className={`bg-white ${
          show ? 'translate-y-0' : 'translate-y-[-100vh]'
        } transition-all duration-500 z-50 w-[360px] lg:w-[500px] mx-4 flex rounded-md flex-col`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalCase;
