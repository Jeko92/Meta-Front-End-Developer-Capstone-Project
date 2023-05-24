import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import MenuPage from "../src/pages/MenuPage/MenuPage";
import Reservation from "../src/pages/ReservationsPage/Reservation";
import ReservationConfirmation from "../src/pages/ReservationConfirmationPage/ReservationConfirmation";
import Header from "../src/Sections/0-HeaderSection/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reserve-a-table" element={<Reservation />} />
        <Route
          path="/reservation-confirmation"
          element={<ReservationConfirmation />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
