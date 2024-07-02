import React from 'react'
import Title from '../../ui/Title'
import { BtnG } from '../../ui/Btn'

const Mail = () => {
  return (
    
    <div className='bg-[#e5e4ed] '>
        <div className='container grid mail justify-center sm:justify-end '>  
              <div className='pt-[35px]'>
                <Title text={"Подпишитесь и будьте в курсе!"} />
                <p className=' text-[--text] font-medium text-[12px] md:text-[14px] lg:text-[16px] pt-[10px] mb-[30px] lg:pt-[20px] lg:mb-[45px] '>Акции, скидки, распродажи ждут!</p>
                <div className='flex rounded-full bg-white border border-[--border] overflow-hidden justify-between mb-[14px] '>
                  <input type="text" name="" id="" className=' sm:grow outline-none px-5 ' placeholder='Введите email' />
                  <BtnG title={"Подписаться"}/>
                </div>
                <div className='flex gap-[10px] items-center mb-[37px] '>
                  <input type="checkbox" name="" id="subscrib" className='w-4  h-4  accent-[--pri] ' />
                  <label htmlFor="subscrib" className='text-[12px] '> Я даю согласие на обработку своих персональных данных.</label>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Mail