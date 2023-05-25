import "./component-styles/BookingForm.css";

export default function BookingForm() {
  return (
    <form>
      <label className="fNameLabel" htmlFor="fname">
        First name:
      </label>
      <input type="text" id="fname" name="fname" required />
      <label className="lNameLabel" htmlFor="lname">
        Last name:
      </label>
      <input type="text" id="lname" name="lname" required />
      <label className="emailLabel" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        placeholder="ex: johndoe@mail.com"
        id="email"
        required
        autoComplete="email"
      />

      <label htmlFor="nGuests">Number of guests:</label>
      <input
        type="number"
        min="1"
        max="100"
        name="nGuests"
        id="nGuests"
        required
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        pattern="+[0-9]{2}-[0-9]{4}-[0-9]{7}"
        placeholder="+49-1590-1234565"
        autoComplete="tel-local"
      />
      <label htmlFor="date">Select Month:</label>
      <input type="date" id="date" required />
      {/* <label for="time">Select Time:</label>
          <input type="time" id="time" required /> */}
      <label htmlFor="time">Select Time</label>
      <select name="time" id="time" className="desiredTime">
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
      </select>

      <label htmlFor="occasion">Choose occasion:</label>
      <select name="occasion" id="occasion">
        <option value="none">None</option>
        <option value="business">Business lunch</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="seatingPref">Seating preferences:</label>
      <select name="seatingPref" id="seatingPref">
        <option value="none">None</option>
        <option value="indoors">Indoors</option>
        <option value="outdoor">Outdoors</option>
        <option value="Terrace">Terrace</option>
      </select>
      <label htmlFor="guestComments">Additional Comments:</label>

      <textarea
        id="guestComments"
        name="guestComments"
        rows="4"
        cols="110"
      ></textarea>
    </form>
  );
}
