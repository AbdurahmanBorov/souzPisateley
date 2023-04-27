import React from 'react';
import './Main.scss'
import HomePage from './HomePage/HomePage';
import Biographer from './Biographer/Biographer';
import Documents from './Documents/Documents';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs'
import Projects from './Project/Projects';
import Writers from './Writers/Writers';
import Creation from './Creation/Creation';
import Contacts from './Contacts/Contacts';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<Biographer />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
};

export default Main;