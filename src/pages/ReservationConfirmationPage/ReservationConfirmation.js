import "../pages-styles/ReservationConfirmation.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function ReservationConfirmation() {
  return (
    <div className="reservations-wrapper">
      <span className="backdrop-filter"></span>
      <div className="reservation-summary">
        <h1>
          We have received your reservation and are happy to welome you soon{" "}
          <IoCheckmarkCircleOutline className="reservation-summary-icon" />
        </h1>
        <h2>Here is a quick summary of your reservation:</h2>
        <div className="reservation-summary__card">
          <ul>
            <li key={Math.random()}>Name: </li>
            <li key={Math.random()}>Email: </li>
            <li key={Math.random()}>Date: </li>
            <li key={Math.random()}>Time: </li>
            <li key={Math.random()}>Occasion: </li>
            <li key={Math.random()}>Table at: </li>
          </ul>
          <h4>
            *Thank you for your reservation and if your plans change, please let
            us know to cancel your reservation
          </h4>
        </div>
      </div>
    </div>
  );
}
