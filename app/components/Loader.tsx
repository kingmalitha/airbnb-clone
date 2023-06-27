"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='flex h-[70vh] flex-col items-center justify-center'>
      <PuffLoader color='red' size={100} />
    </div>
  );
};

export default Loader;
