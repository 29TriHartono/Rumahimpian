import React from 'react';

const CardProperti = (properti) => {
  const { id, imgData, title, price } = properti.item;
  return (
    <>
      <div>
        <img src={imgData} alt="" />
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default CardProperti;
