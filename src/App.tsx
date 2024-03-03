import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DevelopmentProcess} from './pages/development-process/DevelopmentProcess';
import {About} from './pages/about/About';
import Search from './pages/search/Search';
import PageLayout from './pages/page-layout/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Search/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="development-process" element={<DevelopmentProcess/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
