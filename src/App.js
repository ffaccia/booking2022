import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Random from './components/test/random/Random'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
