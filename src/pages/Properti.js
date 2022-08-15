import React from 'react';
import { DataProperti } from '../Asset/DataProperti';
import CardProperti from '../Component/Ui/CardProperti';
import SearchTemukan from '../Component/Ui/SearchTemukan';
const Properti = () => {
  return (
    <>
      <div className="px-setting py-20 flex flex-col gap-10 items-center justify-center">
        <SearchTemukan />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  w-full">
          {DataProperti.filter((item) => item.title === 'Living Room').map((item) => (
            <CardProperti key={item.id} item={item} />
          ))}
          {DataProperti.filter((item) => item.title === 'Bedroom').map((item) => (
            <CardProperti key={item.id} item={item} />
          ))}
          {DataProperti.filter((item) => item.title === 'Kitchen Set').map((item) => (
            <CardProperti key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Properti;
