import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* Components */
import { Header } from './components';
import { ReactComponent as Sprites } from "./components/Icon/sprites.svg";

/* Pages */
import { Home, Cart } from './pages';

const App = () => {
  return (
    <div className="page">
      <Sprites />
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;