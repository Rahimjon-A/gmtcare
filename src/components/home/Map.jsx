import React from 'react';
import ContactForm from './Contact';

const Map = () => {
  return (

    <div className="container gap-[10px] grid gird-cols-1 md:grid-cols-2 mb-[60px] md:mb-[120px] lg:mb-[150px] ">
      <div  className='w-full border border-[--border] rounded-[10px] '>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719411223784!5m2!1suz!2s"
          width="100%"
          height="612"
          className=' rounded-[10px] '
        ></iframe>
      </div>

      <ContactForm/>
      
    </div>
  );
};

export default Map;
