import "../sections-styles/Menu.css";
import MenuImage from "../../assets/images/chef.png";
import {
  IoIosRestaurant,
  IoIosWine,
  IoIosPint,
  IoIosPizza,
  IoIosMic,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <section className="assortment-section">
      <div className="container assortment-section-box">
        <div className="assortment-section-img-box">
          <img
            src={MenuImage}
            alt="Chef preparing mediterranean meal"
            className="assortment-section-img"
          />
        </div>
        <div className="assortment-section-content">
          <h2 className="assortment-section-header">Choose your Menu</h2>
          <ul className="assortment-section-items">
            <li key={Math.random()} className="assortment-section-item">
              <Link to="/menu">
                Breakfast
                <IoIosRestaurant size={40} />
              </Link>
              {/* <a href="./menu.html">
                Breakfast
                <IoIosRestaurant size={40} />
              </a> */}
            </li>
            <li key={Math.random()} className="assortment-section-item">
              <Link to="/menu">
                Lunch <IoIosPint size={40} />
              </Link>
              {/* <a href="./menu.html">
                Lunch <IoIosPint size={40} />
              </a> */}
            </li>
            <li key={Math.random()} className="assortment-section-item">
              <Link to="/menu">
                Dinner <IoIosPizza size={40} />
              </Link>
              {/* <a href="./menu.html">
                Dinner <IoIosPizza size={40} />
              </a> */}
            </li>
            <li key={Math.random()} className="assortment-section-item">
              <Link to="/menu">
                Bar <IoIosWine size={40} />
              </Link>
              {/* <a href="./menu.html">
                Bar <IoIosWine size={40} />
              </a> */}
            </li>
            <li key={Math.random()} className="assortment-section-item">
              <Link to="/menu">
                Events <IoIosMic size={40} />
              </Link>
              {/* <a href="./menu.html">
                Events <IoIosMic size={40} />
              </a> */}
            </li>
          </ul>
          <Link to="/menu" className="assortment-btn" role="button">
            Check Menu details
          </Link>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
