import BookingForm from "../../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

import "../pages-styles/Reservation.css";

export default function Reservation() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <main>
      <div className="reservations-wrapper">
        <span className="backdrop-filter"></span>
        <div className="form-container">
          <h1>Book your table</h1>
          <h6>We are happy to host you</h6>
          <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
      </div>
    </main>
  );
}
