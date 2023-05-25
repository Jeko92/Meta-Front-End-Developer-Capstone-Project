import "../sections-styles/Footer.css";
import { Link } from "react-router-dom";
import React from "react";
import LittleLemonLogo from "../../assets/logos/littlelemonlogo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div className="container-xl footer-wrapper">
        <div className="footer-logo-group">
          <div className="footer-logo-wrapper">
            <Link className="footer-logo" to="/">
              <img src={LittleLemonLogo} alt="Logo of Little Lemon" />
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="footer-social-icon"
              to="https://www.linkedin.com/"
              target="_blank"
            >
              <IoLogoLinkedin size={32} />
            </Link>
            <Link
              className="footer-social-icon"
              to="https://www.twitter.com/"
              target="_blank"
            >
              <IoLogoTwitter size={32} />
            </Link>
            <Link
              className="footer-social-icon"
              to="https://www.whatsapp.com/"
              target="_blank"
            >
              <IoLogoWhatsapp size={32} />
            </Link>
            <Link
              className="footer-social-icon"
              to="https://www.instagram.com/"
              target="_blank"
            >
              <IoLogoInstagram size={32} />
            </Link>
            <Link
              className="footer-social-icon"
              to="https://www.facebook.com/"
              target="_blank"
            >
              <IoLogoFacebook size={32} />
            </Link>
          </div>
        </div>
        <div className="footer-links">
          {/* <ul> */}
          <li key={Math.random()}>
            <Link className="footer-nav-link" to="/">
              Home
            </Link>
          </li>
          <li key={Math.random()}>
            <Link className="footer-nav-link" to="/">
              About
            </Link>
          </li>
          <li key={Math.random()}>
            <Link className="footer-nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li key={Math.random()}>
            <Link className="footer-nav-link" to="/reserve-a-table">
              Reservations
            </Link>
          </li>
          <li key={Math.random()}>
            <Link className="footer-nav-link" to="/">
              Contact us
            </Link>
          </li>
          {/* </ul> */}
        </div>
        <div className="footer-contact">
          <p>+34 123 34 34 34</p>
          <p>
            <Link to="/" className="footer-email">
              info@littlelemon.com
            </Link>
            {/* <a className="footer-email" href="./index.html">
              info@littlelemon.com
            </a> */}
          </p>
          <p>
            252 W 26th St, Chicago, <br />
            IL 60616, United States
          </p>
        </div>
        <MapContainer center={[41.93134, -87.71109]} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.93134, -87.71109]}>
            <Popup>
              This is our nice location. <br /> You are always welcome.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </footer>
  );
}
