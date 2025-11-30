import "./App.css";
import FooterApp from "./Footer";
import HeaderApp from "./Header";
import MainApp from "./Main,";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuApp from "./pages/Menu";
import AboutApp from "./pages/About";
import ContactApp from "./pages/Contact";
import ReservationsApp from "./pages/Reservation";
import OrderOnlineApp from "./pages/OrderOnline";
function App() {
  return (
    <>
      <Router>
        <HeaderApp />       
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/menu" element={<MenuApp />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/contact" element={<ContactApp />} />
          <Route path="/reservation" element={<ReservationsApp/>}/>
           <Route path="/order" element={<OrderOnlineApp/>}/>
        </Routes>
        <FooterApp />
      
      </Router>
    </>
  );
}

export default App;
