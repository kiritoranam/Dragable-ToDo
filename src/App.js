// src/App.js
import React from 'react';
import Flag from './Flags/Flags';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransferList from './Tasks/TransferList';
import DragKanban from './DragKanban/Main';
import Chart from './Tasks/Chart/Main';
import CheckBox from './Tasks/CheckBox';
import ProgressBar from './Tasks/ProgressBar';

function App() {
  return (
    <BrowserRouter basename='/React-project'>
      <Routes>
        <Route path='/Pagination' element={<TransferList />} />
        <Route path='/DragKanban' element={<DragKanban />} />
        <Route path='/Chart' element={<Chart />} />
        <Route path='/CheckBox' element={<CheckBox />} />
        <Route path='/ProgressBar' element={<ProgressBar />} />
        <Route path='/TransferList' element={<TransferList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
