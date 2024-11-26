import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Service from './pages/service/service';
import Contact from './pages/contact/contact';

export default function App() {
  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255, 0.2)'}}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
