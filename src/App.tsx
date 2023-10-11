import React from 'react';
import { Route, Routes } from "react-router-dom";

import Layout from './routes';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

import './App.css';

// https://www.youtube.com/watch?v=xKs2IZZya7c&ab_channel=CodingWithDawid
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
    
  );
}

export default App;
