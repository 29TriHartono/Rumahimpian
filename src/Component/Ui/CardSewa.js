import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose } from '@fortawesome/free-solid-svg-icons';

const CardSewa = (props) => {
  const { imgUrl, id, title, alamat, harga, ket, jumlahkt, jumlahkm, luasrumah } = props.item;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="overflow-hidden  transition duration-300 group relative shadow-xl bg-bgColor">
        <div className="absolute bg-green-900/80 top-2 px-2 rounded-r-md">
          <h3 className="text-white">{ket}</h3>
        </div>
        <img src={imgUrl} alt="" className="w-full group-hover:scale-110 transition duration-500" />
        <div className="px-4 py-2 flex flex-col gap-2 ">
          <h3>{title}</h3>
          <h2 className="font-bold">{harga}</h2>
          <p>{alamat}</p>

          <div className="flex justify-between items-center">
            <div>
              <div>Icon</div>
              <div>{jumlahkt}</div>
            </div>
            <div>
              <div>Icon</div>
              <div>{jumlahkm}</div>
            </div>
            <div>
              <div>Icon</div>
              <div>{luasrumah}</div>
            </div>
          </div>
          <Link to={`/temukanrumah/sewa/${id}`} className="text-white bg-green-900  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-1/2 my-2 py-1 hover:bg-green-700 transition duration-200 text-center cursor-pointer  ">
            Lihat Detail
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardSewa;
