import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import Beranda from '../pages/Beranda';
import Kontak from '../pages/Kontak';
import TemukanRumah from '../pages/TemukanRumah';
import Properti from '../pages/Properti';
import Detail from '../pages/Detail';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/temukanrumah" element={<TemukanRumah />} />
        <Route path="/properti" element={<Properti />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/temukanrumah/detailrumah/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Routers;
