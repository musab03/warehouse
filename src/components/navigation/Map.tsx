import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="font-bold text-center mx-auto max-w-6xl items-center ">
      <h1 className='sm:text-2xl md:text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500'>Find Us</h1>
      <div className=" w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.113325634678!2d66.9831683!3d24.9055417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315c226748237%3A0x4125d93da8f89e59!2sTulip%20bond!5e0!3m2!1sen!2s!4v1733254372162!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
            className='h-[440px] w-full'    
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
