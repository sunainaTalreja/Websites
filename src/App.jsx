import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Service from './Service';
import Contact from './Contact';
import Cart from './Cart';
import Header from './components/Header';
import QR from './QR';
import Menulist from './Menulist';
import Footer from './components/Footer';
import  History from './History'


function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/qr" element={<QR />} />
          <Route path="/Menulist" element={<Menulist />} />
          <Route path="/History" element={<History />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
