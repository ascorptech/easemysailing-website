import React from 'react'
import EmsCard from './EmsCard';
import EmsDetail from './EmsDetail';

export default function EmsContain() {
  return (
    <div className="flex  justify-between items-center mx-5 gap-5">
      <div className=" w-full ">
        <EmsCard />
      </div>
      {/* right div */}
      <div className="border w-full  shadow-2xl  bg-white rounded-md">
        <EmsDetail />
      </div>
    </div>
  );
}
