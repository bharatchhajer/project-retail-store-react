import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import StoreAll from './components/admin/StoreAll/StoreAll';
import StoreAdd from './components/admin/StoreAdd/StoreAdd';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Functional Component
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Davangere Retail Store</h1>
        <p>you search ends here...</p>
      </header>
      <nav>
        <Profile firstname="Puneeth" lastname="Rajkumar" />
      </nav>
      <main>
      <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/admin/stores/all" element={<StoreAll  />} />
            <Route path="/admin/stores/add" element={<StoreAdd  />} />
      </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
