import "../sections-styles/Menu.css";
import MenuImage from "../../assets/images/chef.png";
import {
  IoIosRestaurant,
  IoIosWine,
  IoIosPint,
  IoIosPizza,
  IoIosMic,
} from "react-icons/io";

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
            <li className="assortment-section-item">
              <a href="./menu.html">
                Breakfast
                <IoIosRestaurant size={40} />
              </a>
            </li>
            <li className="assortment-section-item">
              <a href="./menu.html">
                Lunch <IoIosPint size={40} />
              </a>
            </li>
            <li className="assortment-section-item">
              <a href="./menu.html">
                Dinner <IoIosPizza size={40} />
              </a>
            </li>
            <li className="assortment-section-item">
              <a href="./menu.html">
                Bar <IoIosWine size={40} />
              </a>
            </li>
            <li className="assortment-section-item">
              <a href="./menu.html">
                Events <IoIosMic size={40} />
              </a>
            </li>
          </ul>
          <a className="assortment-btn" role="button" href="./menu.html">
            Check Menu details
          </a>
        </div>
      </div>
    </section>
  );
}
