import React, { useState } from 'react';
import { BtnG } from '../../ui/Btn';

const ContactForm = ({ title = "Остались вопросы?"}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      question: '',
    })
  };

  return (
    <div className=" bg-white p-[40px] border border-[--border] rounded-md">
      <h2 className=" lg:text-[30px] mb-4"> {title} </h2>
      <p className="mb-6 text-[14px] text-[--text] xl:pr-[150px] ">
        Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер
        перезвонит вам через 10 минут
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
          />
        </div>
        <div className=" lg:mb-[30px] ">
          <textarea
            name="question"
            placeholder="Ваш вопрос"
            value={formData.question}
            onChange={handleChange}
            required
            className="w-full h-[100px] resize-none p-[11px] text-[14px] outline-none border-b border-[--border] "
          />
        </div>

        <div className="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px] items-start lg:items-center ">
          <BtnG title={'Отправить'} />

          <p className="mt-4 text-[12px] font-medium text-[--text] opacity-60">
            Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях{' '}
            <a href="#" className="text-[#088269] underline">
              Политики конфиденциальности
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
