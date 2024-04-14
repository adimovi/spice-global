import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Join from "./pages/Join";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import './desktop.css';
import './mobile.css';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/spice-global/" element={<Home/>} />
      <Route path="/spice-global/about" element={<About/>} />
      <Route path="/spice-global/locations" element={<Locations/>} />
      <Route path="/spice-global/Join" element={<Join/>} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);