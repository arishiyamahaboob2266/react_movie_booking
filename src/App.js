import './App.css';
import React, { useContext } from 'react';
import MyNewContext from './MyContext';

import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Login from './login/Login';
import MovieList from './movieList/MovieList';
import Header from './Header';
import Home from './Home';



function App() {

  const { authenticated, setAuthenticated } = useContext(MyNewContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={authenticated} />}/>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<MovieList />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
