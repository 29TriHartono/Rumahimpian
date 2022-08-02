import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataJualRumah } from '../Asset/Data';
import ExploreMore from '../Component/Ui/ExploreMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Detail = () => {
  const { id } = useParams();
  const DetailSell = dataJualRumah.find((item) => item.id === id);
  const [fixSidebar, setFixSidebar] = useState(false);
  function FixedSideBar() {
    if (window.scrollY >= 700) {
      setFixSidebar(true);
    } else {
      setFixSidebar(false);
    }
  }
  window.addEventListener('scroll', FixedSideBar);
  return (
    <>
      <section className="py-20  flex flex-col bg-gradient-to-b from-greenColor to-bgColor ">
        <div className="grid grid-cols-3 px-setting gap-4 py-10">
          <div className="col-span-3 md:col-span-2 shadow-md p-4">
            <div className="">
              <img src={DetailSell.imgUrl} className="w-full" alt="" />
            </div>
            <div className=" flex flex-col gap-6 p-4">
              <h2>{DetailSell.title}</h2>
              <h2>{DetailSell.harga}</h2>
              <h3>{DetailSell.alamat}</h3>
              <div>
                <div className="font-semibold">Deskripsi</div>
                <p>{DetailSell.deskripsi}</p>
              </div>
              <p className="text-red-600 font-bold">{DetailSell.ket}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div>Icon</div>
                  <div>{DetailSell.jumlahkt}</div>
                </div>
                <div>
                  <div>Icon</div>
                  <div>{DetailSell.jumlahkm}</div>
                </div>
                <div>
                  <div>Icon</div>
                  <div>{DetailSell.luasrumah}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full col-span-1 flex justify-center relative">
            <div className={fixSidebar ? 'sidebar' : 'sidebarfixed'}>
              <button className="flex items-center justify-center px-4  w-full py-4 gap-4 hover:bg-bgColor ">
                <FontAwesomeIcon icon={faShoppingCart} />
                Hubungi
              </button>
              <button className="flex items-center justify-center px-4 w-full  py-4 gap-4 hover:bg-bgColor ">
                <FontAwesomeIcon icon={faShoppingCart} />
                Hubungi
              </button>
              <button className="flex items-center justify-center px-4  w-full py-4 gap-4 hover:bg-bgColor ">
                <FontAwesomeIcon icon={faShoppingCart} />
                Hubungi
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <ExploreMore liveLink="/temukanrumah" />
        </div>
      </section>
    </>
  );
};

export default Detail;
