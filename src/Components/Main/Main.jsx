import React from 'react';
import './Main.scss'
import HomePage from './HomePage/HomePage';
import Biographer from './Biographer/Biographer';
import Documents from './Documents/Documents';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<Biographer />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </main>
  );
};

export default Main;