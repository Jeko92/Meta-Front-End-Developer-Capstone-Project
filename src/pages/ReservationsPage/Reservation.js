import BookingForm from "../../components/BookingForm";

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
        </div>
      </div>
    </main>
  );
}
