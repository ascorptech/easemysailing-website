import React from 'react'
import EmsCard from './EmsCard';
import EmsDetail from './EmsDetail';

export default function EmsContain() {
  return (
    <div className="flex flex-row justify-between items-center mx-5">
      <div className=" w-[48%] ">
        <EmsCard />
      </div>
      {/* right div */}
      <div className="border-2 w-[48%]  shadow-2xl p-6 bg-white rounded-lg">
        <EmsDetail />
      </div>
    </div>
  );
}
