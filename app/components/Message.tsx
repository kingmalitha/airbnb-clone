"use client";

import { useState } from "react";
import { ImCross } from "react-icons/im";

const Message = () => {
  const [active, setActive] = useState(true);

  const closeMessage = () => {
    setActive(false);
  };

  if (!active) return null;

  return (
    <div className=' w-full bg-red-400'>
      <div className='flex flex-row gap-8 px-20 py-3 '>
        <p className='text-left text-base text-white'>
          Attention! Important Notice from the Developer: If you encounter any
          issues while logging in or if no places are being displayed on the
          homepage, it is likely due to the MongoDB database cluster being
          inactive, which is responsible for fetching the data. In such cases,
          please reach out to me immediately at{" "}
          <a href='mailto:malithasandaruwan@gmail.com'>
            malithasandaruwan@gmail.com
          </a>
          contact. for prompt assistance. Thank you for your understanding and
          cooperation.
        </p>

        <button onClick={closeMessage}>
          <ImCross size={24} className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default Message;
