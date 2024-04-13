import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Join from "./pages/Join";
import Footer from "./components/Footer";
import './desktop.css';
import './mobile.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/spice-global/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);