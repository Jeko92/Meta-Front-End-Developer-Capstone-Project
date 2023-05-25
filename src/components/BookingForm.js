import "./component-styles/BookingForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function BookingForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [nGuests, setNGuests] = useState(1);
  const [phone, setPhone] = useState("+49-1590-1234565");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [seatingPref, setSeatingPref] = useState("");
  const [guestComments, setGuestComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form>
      <label className="fNameLabel" htmlFor="fName">
        First name:
      </label>
      <input
        type="text"
        id="fName"
        name="fName"
        required
        minLength={2}
        maxLength={50}
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />

      <label className="lNameLabel" htmlFor="lName">
        Last name:
      </label>
      <input
        type="text"
        id="lName"
        name="lName"
        required
        minLength={2}
        maxLength={50}
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <label className="emailLabel" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        placeholder="ex: johndoe@mail.com"
        id="email"
        autoComplete="email"
        value={email}
        required
        minLength={4}
        maxLength={200}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="nGuests">Number of guests:</label>
      <input
        type="number"
        name="nGuests"
        id="nGuests"
        value={nGuests}
        required
        min={1}
        max={100}
        onChange={(e) => setNGuests(e.target.value)}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        pattern="+[0-9]{2}-[0-9]{4}-[0-9]{7}"
        placeholder="+49-1590-1234565"
        value={phone}
        autoComplete="tel-local"
        required
        minLength={10}
        maxLength={25}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        required
        value={date}
        onChange={handleDateChange}
      />
      {/* <label for="time">Select Time:</label>
          <input type="time" id="time" required /> */}
      <label htmlFor="time">Select Time</label>
      {/* <select name="time" id="time" className="desiredTime">
        <option value="17:00">17:00</option>
        <option value="17:30">17:30</option>
        <option value="18:00">18:00</option>
        <option value="18:30">18:30</option>
        <option value="19:00">19:00</option>
        <option value="19:30">19:30</option>
        <option value="20:00">20:00</option>
        <option value="20:30">20:30</option>
        <option value="21:00">21:00</option>
        <option value="21:30">21:30</option>
        <option value="22:00">22:00</option>
      </select> */}
      <select id="time" required>
        {finalTime}
      </select>
      <label htmlFor="occasion">Choose occasion:</label>
      <select
        name="occasion"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="none">None</option>
        <option value="business">Business lunch</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="seatingPref">Seating preferences:</label>
      <select
        name="seatingPref"
        id="seatingPref"
        value={seatingPref}
        onChange={(e) => setSeatingPref(e.target.value)}
      >
        <option value="none">None</option>
        <option value="indoors">Indoors</option>
        <option value="outdoor">Outdoors</option>
        <option value="Terrace">Terrace</option>
      </select>
      <label htmlFor="guestComments">Additional Comments:</label>
      <textarea
        id="guestComments"
        name="guestComments"
        rows={8}
        cols={50}
        placeholder="Additional Comments"
        value={guestComments}
        onChange={(e) => setGuestComments(e.target.value)}
      ></textarea>
      <p>
        Note: You cannot edit your reservation after submission. Please
        double-check your answer before submitting your reservation request.
      </p>
      <Link to="/reservation-confirmation">
        <button className="btn">Check availability </button>
      </Link>
    </form>
  );
}
