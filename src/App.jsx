import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Nav.jsx'
import { Hero } from './Pages/Hero.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./Pages/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;