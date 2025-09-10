import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Implementation from './pages/services/Implementation.jsx';
import Consulting from './pages/services/Consulting.jsx';
import CustomDevelopment from './pages/services/CustomDevelopment.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SidePreviewPanel from './components/SidePreviewPanel.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/implementation" element={<Implementation />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/custom-development" element={<CustomDevelopment />} />
      </Routes>
      <Footer />
      <SidePreviewPanel />
    </BrowserRouter>
  );
}
