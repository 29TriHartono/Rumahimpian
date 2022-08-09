import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SearchTemukan = (search) => {
  return (
    <>
      <div className="w-full px-setting">
        <div className="flex items-center justify-center md:items-start w-full md:w-fit bg-white text-green-900 rounded-t-md">
          <NavLink to="/dijual" className="navlink">
            Beli
          </NavLink>
          <NavLink to="/disewa" className="navlink">
            Sewa
          </NavLink>
          <NavLink to="/properti" className="navlink">
            Properti Baru
          </NavLink>
        </div>
        <div className="md:grid grid-cols-9 md:h-14 rounded-bl-md overflow-hidden bg-white rounded-br-md rounded-tr-sm">
          <div className="flex py-2 col-span-4 items-center md:px-10 justify-center md:justify-between">
            <div className="flex bg-white items-center xl:gap-2 justify-center">
              {/* <FontAwesomeIcon icon={faHouseChimney} className="text-green-900" /> */}
              <select id="Tipe" name="tipe" className="bg-white text-green-900">
                <option value={search.tiperumah}>Tipe Rumah</option>
                <option value={search.dualantai}>2 Lantai</option>
                <option value={search.satulantai}>1 Lantai</option>
                <option value={search.halaman}>Halaman Luas</option>
              </select>
            </div>
            <div className="flex bg-white items-center xl:gap-2 justify-center">
              {/* <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-green-900" /> */}
              <select id="RangeHarga" name="tipe" className="bg-white text-green-900">
                <option value={search.rangeharga}>Range Harga</option>
                <option value={search.termurah}>Termurah</option>
                <option value={search.termahal}>Termahal</option>
                <option value={search.halaman}>Halaman Luas</option>
              </select>
            </div>
          </div>
          <input className="col-span-4 px-4 py-4 md:py-2 bg-white text-green-900 border-none focus:outline-none " type="text" placeholder="Cari Berdasarkan Jenis Property" />
          <button className="bg-green-900 text-white w-full py-2 rounded-sm">Cari</button>
        </div>
      </div>
    </>
  );
};

export default SearchTemukan;