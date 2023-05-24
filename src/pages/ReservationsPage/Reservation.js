import BookingForm from "../../components/BookingForm";
import { Link } from "react-router-dom";
import "../pages-styles/Reservation.css";

export default function Reservation() {
  return (
    <main>
      <div className="reservations-wrapper">
        <span className="backdrop-filter"></span>
        <div className="form-container">
          <h1>Book your table</h1>
          <h6>We are happy to host you</h6>
          <BookingForm />
          <Link to="/reservation-confirmation">
            <button className="btn">Check availability </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
